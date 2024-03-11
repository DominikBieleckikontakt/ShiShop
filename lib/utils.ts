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
    .list(undefined, { limit: 10 });
  const arrayOfImagesUrl: Array<{ data: { publicUrl: string } }> = [];

  data?.map((item) => {
    const url = supabase.storage.from("images").getPublicUrl(`${item.name}`);
    arrayOfImagesUrl.push(url);
  });

  return { arrayOfImagesUrl, error };
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
  const newUser = await db.user.create({
    data: {
      id: userId,
    },
  });
};
