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
      totalItems: 0,
      totalPrice: 0,
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

export const addItemToState = (
  id: string,
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
  return newCart;
};

export const addItemToCart = (
  id: string,
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
  const newCart = addItemToState(
    id,
    name,
    price,
    totalAmount,
    totalPrice,
    items,
    setCart
  );

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

export const addItemToUserCart = async (
  userId: string,
  id: bigint,
  name: string,
  price: number
) => {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
  });

  const cart = await db.cart.findUnique({
    where: {
      userId: user?.id,
    },
  });

  const product = await db.products.findUnique({
    where: {
      id,
    },
  });

  //  CHECK IF USER ALREADY HAS A CART

  if (cart && product) {
    const cartItems = await db.cartItem.findMany({
      where: {
        cartId: cart.id,
      },
    });

    const isAlreadyInCart = cartItems.find(
      (item) => item.productId === product?.id
    );

    // CHECK IF USER HAS ALREADY THIS ITEM IN A CART
    if (isAlreadyInCart !== undefined) {
      const amount = isAlreadyInCart.quantity + 1;
      const totalPrice = isAlreadyInCart.summedPrice + price;
      const newCartItem = await db.cartItem.updateMany({
        where: {
          cartId: cart.id,
          productId: product?.id,
        },
        data: {
          quantity: amount,
          summedPrice: totalPrice,
        },
      });
    } else {
      try {
        const updatedItems = await db.cartItem.create({
          data: {
            productId: product.id,
            cartId: cart.id,
            quantity: 1,
            summedPrice: price,
          },
        });
      } catch (error) {}
    }
    await db.cart.update({
      where: {
        userId: user!.id,
      },
      data: {
        totalPrice: cart!.totalPrice + price,
        totalItems: cart!.totalItems + 1,
      },
    });
  }
};

export const getCartFromDatabase = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });

    const cart = await db.cart.findUnique({
      where: {
        userId: user?.id,
      },
    });

    const cartItems = await db.cartItem.findMany({
      where: {
        cartId: cart?.id,
      },
    });

    return {
      items: cartItems,
      totalQuantity: cart?.totalItems,
      totalPrice: cart?.totalPrice,
    };
  } catch (error) {
    return {
      message: "Something gone wrong during fetching items from database",
    };
  }
};

export const sendDataFromStorageToDatabase = async (
  userId: string,
  items: cartItem[],
  totalAmount: number,
  totalPrice: number
) => {
  const cart = await db.cart.findUnique({
    where: {
      userId: userId,
    },
  });

  items.map(async (item) => {
    const product = await db.products.findUnique({
      where: {
        id: BigInt(item.id),
      },
    });

    if (cart && product) {
      try {
        const updatedItems = await db.cartItem.create({
          data: {
            productId: product.id,
            cartId: cart.id,
            quantity: item.amount,
            summedPrice: item.summedPrice,
          },
        });
      } catch (error) {
        console.log("error: " + error);
      }
    }
  });

  await db.cart.update({
    where: {
      userId: userId,
    },
    data: {
      totalPrice: totalPrice,
      totalItems: totalAmount,
    },
  });
};
