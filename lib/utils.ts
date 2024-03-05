import { supabase } from "./supabase";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { db } from "./prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getImages = async () => {
  const { data, error } = await supabase.storage.from("images").list();
  const arrayOfImagesUrl: Array<{ data: { publicUrl: string } }> = [];

  data?.map((item) => {
    const url = supabase.storage.from("images").getPublicUrl(`${item.name}`);
    arrayOfImagesUrl.push(url);
    console.log(url);
  });

  return { arrayOfImagesUrl, error };
};

export const getProducts = async () => {
  const products = await db.products.findMany();

  return products;
};
