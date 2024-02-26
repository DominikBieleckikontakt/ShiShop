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
