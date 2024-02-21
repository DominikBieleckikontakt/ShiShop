import React from "react";
import { MobileNavBar, PCNavBar } from "../client";

const NavBar = () => {
  return (
    <>
      <div className="max-sm:block hidden">
        <MobileNavBar />
      </div>
      <div className="max-sm:hidden block">
        <PCNavBar />
      </div>
    </>
  );
};

export default NavBar;
