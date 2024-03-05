import React from "react";

import ProductItem from "./ProductItem";
import { Product } from "@/types";
import { MotionDiv } from "../client";

const variants = {
  hidden: { opacity: 0, translateY: "20%" },
  visible: { opacity: 1, translateY: "0%" },
};

const ProductsList = ({
  filter,
  products,
}: {
  filter: string;
  products: Product[];
}) => {
  const filteredProducts = products.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .trim()
      .includes(filter.toLocaleLowerCase().trim())
  );

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      transition={{
        ease: "easeInOut",
        duration: 1.5,
        delay: 0.5,
      }}
      viewport={{ amount: 0, once: true }}
      whileInView="visible"
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.map((item, index) => (
          <ProductItem
            id={item.id}
            elementIndex={index}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            sizes={item.sizes}
            categories={item.categories}
            key={item.id}
          />
        ))}
      </ul>
    </MotionDiv>
  );
};

export default ProductsList;
