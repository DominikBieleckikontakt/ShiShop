"use client";
import React from "react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { Product } from "@/types";

const ProductsTable = ({ products }: { products: Product[] }) => {
  return (
    <>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item, index) => (
            <>
              <TableRow key={item.id}>
                <TableCell>{item.id.toString()}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.sizes.join(" | ")}</TableCell>
                <TableCell>{item.categories.join(" | ")}</TableCell>
                <TableCell>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_PRODUCTS_PUBLIC_URL}${item.image}`}
                    alt={`${item.name}`}
                    width={50}
                    height={50}
                    quality={100}
                    className="rounded-lg hover:scale-150 duration-500"
                  />
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductsTable;
