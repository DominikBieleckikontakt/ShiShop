import React from "react";

import { getProducts } from "@/lib/utils";
import ProductItem from "./ProductItem";

const ProductsList = async () => {
  const products = await getProducts();

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {products.map((item) => (
        <ProductItem
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          sizes={item.sizes}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
