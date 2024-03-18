import React from "react";
import { MobileMenu, PCMenu } from "../client";
import { Separator } from "../UI/separator";
import { MenuOptionsStore } from "@/types";

const Menu = ({ options }: { options: MenuOptionsStore[] }) => {
  return (
    <>
      <div className="max-md:hidden flex p-5 ">
        <PCMenu options={options} />
        <Separator
          className="bg-darkDirty dark:bg-whiteDirty ml-5"
          orientation="vertical"
        />
      </div>
      <div className="w-full hidden max-md:flex max-md:justify-center flex-col p-2">
        <MobileMenu options={options} />
        <Separator className="bg-primary dark:bg-primary mt-2" />
      </div>
    </>
  );
};

export default Menu;
