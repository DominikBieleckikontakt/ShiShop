import { CustomCarousel, ShopPanel } from "@/components/server";
import { getCategories, getProducts } from "@/lib/utils";
import React from "react";

const page = async () => {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main>
      <CustomCarousel />
      <ShopPanel products={products} categories={categories} />
    </main>
  );
};

export default page;
