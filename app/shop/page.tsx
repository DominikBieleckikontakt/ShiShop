import { CustomCarousel, ShopPanel } from "@/components/server";
import { getProducts } from "@/lib/utils";
import React from "react";

const page = async () => {
  const products = await getProducts();

  return (
    <main>
      <CustomCarousel />
      <ShopPanel products={products} />
    </main>
  );
};

export default page;
