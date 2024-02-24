import React from "react";

export type InfoSectionProps = {
  title: string;
  image?: {
    src: string;
    alt: string;
    rounded?: boolean;
    onRight?: boolean;
    onBottom?: boolean;
  };
  children: React.ReactNode;
  id?: string;
};
