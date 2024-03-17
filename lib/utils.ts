import { supabase } from "./supabase";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./prisma";

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
