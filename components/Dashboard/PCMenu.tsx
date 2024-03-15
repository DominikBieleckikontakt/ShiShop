"use client";
import React from "react";
import { Separator } from "../UI/separator";
import { MenuOptionsStore } from "@/types";
import { useOptionsStore } from "@/lib/store";

const PCMenu = ({ options }: { options: MenuOptionsStore[] }) => {
  const changeIndex = useOptionsStore((state) => state.changeIndex);
  const currentIndex = useOptionsStore((state) => state.index) || 0;

  return (
    <div>
      <div>
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              changeIndex(index);
            }}
          >
            <div className="py-5 hover:text-accent cursor-pointer duration-300">
              {index === currentIndex ? (
                <span className="font-bold text-accent">{item.title}</span>
              ) : (
                <span>{item.title}</span>
              )}
            </div>
            {options.length - 1 !== index && (
              <Separator className="bg-accent dark:bg-accent" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PCMenu;
