import React from "react";

export type InfoSectionProps = {
  title: string;
  image?: {
    src: string;
    alt: string;
    rounded?: boolean;
    onRight?: boolean;
    onBottom?: boolean;
    size?: number;
    width?: number;
    height?: number;
  };
  children: React.ReactNode;
  id?: string;
};

export type Product = {
  id: bigint;
  name: string;
  description: string;
  price: number;
  image: string;
  sizes: string[];
  categories: string[];
  elementIndex?: number;
};

export type FilterTypes = {
  categories: string[];
  minPrice: number;
  maxPrice: number;
};

export type Categorie = {
  id: bigint;
  name: string;
};

export type MenuOptionsStore = {
  title: string;
  component?: React.JSX.Element;
};
