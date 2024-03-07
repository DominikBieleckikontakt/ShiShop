"use client";
import React, { useState } from "react";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";
import { Product } from "@/types";
import { FilterButton, MotionDiv } from "../client";

const variants = {
  hidden: { opacity: 0, translateY: "20%" },
  visible: { opacity: 1, translateY: "0%" },
};

const ShopPanel = ({
  products,
  categories,
}: {
  products: Product[];
  categories: { id: bigint; name: string }[];
}) => {
  const [productFilter, setProductFilter] = useState("");

  const changeFilter = (filter: string) => {
    setProductFilter(filter);
  };

  return (
    <div className="mx-auto flex flex-col mt-24 max-w-[1100px]">
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
          delay: 0.5,
        }}
        viewport={{ amount: 0, once: true }}
        className="mx-5"
      >
        <p className="text-4xl font-light mb-10 text-center">Our products</p>
        <div className="flex items-center gap-5 mb-10">
          <SearchBar onChangeFilter={changeFilter} />
          <FilterButton categories={categories} />
        </div>
        <ProductsList
          filter={productFilter}
          products={products}
          allCategories={categories}
        />
      </MotionDiv>
    </div>
  );
};

export default ShopPanel;
