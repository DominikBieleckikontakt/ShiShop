import { CustomCarousel, ShopPanel } from "@/components/server";
import { getCategories, getProducts } from "@/lib/utils";
import React from "react";
import { Toaster } from "react-hot-toast";

const page = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main>
      <CustomCarousel />
      <ShopPanel products={products} categories={categories} />
      <Toaster position="bottom-center" />
    </main>
  );
};

export default page;
