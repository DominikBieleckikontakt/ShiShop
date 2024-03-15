"use client";
import { useOptionsStore } from "@/lib/store";
import { MenuOptionsStore } from "@/types";
import React from "react";

const PanelDisplayer = ({ options }: { options: MenuOptionsStore[] }) => {
  const index = useOptionsStore((state) => state.index) || 0;

  return <div className=" my-3 mx-5">{options[index]?.component}</div>;
};

export default PanelDisplayer;
