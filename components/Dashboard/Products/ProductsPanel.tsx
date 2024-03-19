import { getProducts } from "@/lib/utils";
import React from "react";
import { ProductsTable } from "@/components/client";

const ProductsPanel = async () => {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-light">Manage available products</h1>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsPanel;
