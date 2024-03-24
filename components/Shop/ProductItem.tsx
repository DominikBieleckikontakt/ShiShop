"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { useCartStore } from "@/lib/store";
import { Product } from "@/types";
import { Button } from "../server";
import CategoriesList from "./CategoriesList";
import { addItemToCart, addItemToState, addItemToUserCart } from "@/lib/utils";
import toast from "react-hot-toast";
import { toastThemedClasses } from "@/constants";

const ProductItem = ({
  id,
  name,
  price,
  image,
  categories,
  elementIndex,
}: Product) => {
  const { userId } = useAuth();
  const items = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const setCart = useCartStore((state) => state.setCart);

  const onAddToCartHandler = async () => {
    if (userId) {
      const uId = id.toString();
      toast.loading("Adding product...", {
        className: toastThemedClasses,
      });
      const res = await fetch(`/api/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          uId,
          name,
          price,
        }),
      });
      const fetchedData = await res.json();
      const { isSucceded } = fetchedData;
      toast.dismiss();
      isSucceded
        ? toast.success("Product added to cart", {
            className: toastThemedClasses,
          })
        : toast.error("Something gone wrong during adding product to cart", {
            className: toastThemedClasses,
          });
      isSucceded &&
        addItemToState(
          id.toString(),
          name,
          price,
          totalAmount,
          totalPrice,
          items,
          setCart
        );
    } else {
      addItemToCart(
        id.toString(),
        name,
        price,
        totalAmount,
        totalPrice,
        items,
        setCart
      );
      toast.success("Product added to cart", {
        className: toastThemedClasses,
      });
    }
  };

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
        onClick={onAddToCartHandler}
      >
        <Image src="/icons/white-cart.svg" width={30} height={30} alt="cart" />
      </Button>
    </li>
  );
};

export default ProductItem;
