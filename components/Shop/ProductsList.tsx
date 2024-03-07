"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import ProductItem from "./ProductItem";
import { Categorie, Product } from "@/types";

const ProductsList = ({
  filter,
  products,
  allCategories,
}: {
  filter: string;
  products: Product[];
  allCategories: Categorie[];
}) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const params = useSearchParams();

  const allCategs = allCategories.map((item) => item.name);

  const categories =
    params.getAll("categories").length > 0
      ? params.getAll("categories")
      : allCategs;
  const minPrice = params.get("minPrice") ? Number(params.get("minPrice")) : 0;
  const maxPrice = params.get("maxPrice")
    ? Number(params.get("maxPrice"))
    : 100000;

  useEffect(() => {
    setFilteredProducts(
      products
        .filter((item) =>
          item.name
            .toLocaleLowerCase()
            .trim()
            .includes(filter.toLocaleLowerCase().trim())
        )
        .filter((item) =>
          categories.some((value) => item.categories.includes(value))
        )
        .filter((item) => item.price >= minPrice && item.price <= maxPrice)
    );
  }, [filter, products]);

  return (
    <>
      {filteredProducts.length > 0 ? (
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
      ) : (
        <div className="my-10 py-64 bg-whiteDirty dark:bg-darkDirty text-center text-xl rounded-lg">
          There are no such products. Maybe try to find another one?
        </div>
      )}
    </>
  );
};

export default ProductsList;
