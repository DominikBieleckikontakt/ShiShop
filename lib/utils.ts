import { supabase } from "./supabase";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./prisma";
import { v4 as uuidv4 } from "uuid";
import { cartItem } from "./store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImages = async () => {
  const { data, error } = await supabase.storage
    .from("images")
    .list("folder", { limit: 20 });
  const arrayOfImagesUrl: Array<{ data: { publicUrl: string } }> = [];

  data?.map((item) => {
    const url = supabase.storage
      .from("images")
      .getPublicUrl(`folder/${item.name}`);
    arrayOfImagesUrl.push(url);
  });

  return { arrayOfImagesUrl, error };
};

export const deleteImage = async (element: string, directory: string) => {
  const fullPath = element;
  const fileName = fullPath.slice(
    fullPath.lastIndexOf("/") + 1,
    fullPath.length
  );
  console.log(fileName);
  const { data, error } = await supabase.storage
    .from("images")
    .remove([`${directory}/${fileName}`]);

  console.log(data, error);
  return { data, error };
};

export const createImage = async (file: File, name: string) => {
  const filename = `${uuidv4()}-${name.toLocaleLowerCase().trim()}`;

  const { data, error } = await supabase.storage
    .from("images")
    .upload(`folder/${filename}`, file, {
      cacheControl: "3600",
      upsert: false,
    });

  return { error };
};

export const getProducts = async () => {
  const products = await db.products.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return products;
};

export const getCategories = async () => {
  const allCategories = await db.categories.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return allCategories;
};

export const checkIfUserExists = async (userId: string) => {
  const userExists = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (userExists) {
    return true;
  }

  return false;
};

export const createNewUser = async (userId: string) => {
  await db.user.create({
    data: {
      id: userId,
    },
  });

  await db.cart.create({
    data: {
      userId,
    },
  });
};

export const isUserAdmin = async (userId: string) => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    return user.isAdmin;
  }
};

export const addItemToCart = (
  id: bigint,
  name: string,
  price: number,
  totalAmount: number,
  totalPrice: number,
  items: cartItem[],
  setCart: (
    currentItems: cartItem[],
    quantity: number,
    totalPrice: number
  ) => void
) => {
  const newCart = items;
  const searchedIndex = newCart.findIndex((item) => item.name === name);

  // ADDING AMOUNT AND SUMMED PRICE OF QUANTITY OF PRODUCTS
  let amount = searchedIndex !== -1 ? newCart[searchedIndex].amount + 1 : 1;
  let summedPrice = amount > 0 ? amount * price : price;

  if (!newCart.find((item) => item.name === name)) {
    newCart.push({
      id,
      name,
      price,
      amount,
      summedPrice,
    });
  } else {
    newCart[searchedIndex].amount = amount;
    newCart[searchedIndex].summedPrice = summedPrice;
  }
  setCart(newCart, totalAmount + 1, totalPrice + price);

  // ADDING ITEM TO LOCALE STORAGE
  const localStorageObject = {
    items: newCart.map((item: cartItem) => {
      return { ...item, id: item.id.toString() };
    }),
    totalAmount: totalAmount + 1,
    totalPrice: totalPrice + price,
  };

  localStorage.setItem("cart", JSON.stringify(localStorageObject));
  // const localeStorageCart = JSON.parse(localStorage.getItem("cart") || "");
};

export const getCartFromLocalStorage = () => {};
