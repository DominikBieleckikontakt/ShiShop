import React from "react";
import { Product } from "@/types";
import Image from "next/image";

const ProductItem = ({ id, name, price, image }: Product) => {
  return (
    <li className="rounded-xl shadow-md flex flex-col justify-center bg-[#ffffff] dark:bg-darkDirty">
      <Image
        src={`${process.env.NEXT_PUBLIC_PRODUCTS_PUBLIC_URL}${image}`}
        alt="image"
        width={200}
        height={200}
        quality={100}
        className="rounded-t-xl w-full"
      />
      <div className="p-5">
        <p className="font-bold text-lg">{name}</p>
        <p className="italic font-light">${price}</p>
      </div>
    </li>
  );
};

export default ProductItem;
