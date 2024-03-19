"use client";
import React, { useState } from "react";
import { Edit, Trash } from "lucide-react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import { Button } from "@/components/server";
import { Product } from "@/types";
import { EditProductsModal } from "@/components/client";

const ProductsTable = ({ products }: { products: Product[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <EditProductsModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Sizes</TableHead>
            <TableHead>Categories</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Edit</TableHead>
            <TableHead>Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item, index) => (
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
              <TableCell>
                <Button variant="outline" onClick={() => setIsOpen(true)}>
                  <Edit />
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outline">
                  <Trash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductsTable;
