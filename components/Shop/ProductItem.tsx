import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";
import { Button } from "../server";
import CategoriesList from "./CategoriesList";

const ProductItem = ({
  id,
  name,
  price,
  image,
  categories,
  elementIndex,
}: Product) => {
  return (
    <li className="hover:scale-105 duration-300 cursor-pointer rounded-xl shadow-md flex flex-col justify-center bg-[#ffffff] dark:bg-darkDirty">
      <Link href="">
        <Image
          src={`${process.env.NEXT_PUBLIC_PRODUCTS_PUBLIC_URL}${image}`}
          alt={`${name} image`}
          width={200}
          height={200}
          quality={100}
          className="rounded-t-xl w-full"
        />
        <div className="p-5">
          <p className="font-bold text-lg">{name}</p>
          <CategoriesList categories={categories} />
          <p className="italic mt-2">${price}</p>
        </div>
      </Link>
      <Button
        variant="outline"
        className="hover:bg-secondary bg-secondary bg-opacity-50 border-none w-full"
      >
        <Image src="/icons/white-cart.svg" width={30} height={30} alt="cart" />
      </Button>
    </li>
  );
};

export default ProductItem;
