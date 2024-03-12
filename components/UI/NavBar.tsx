import React from "react";
import { MobileNavBar, PCNavBar } from "../client";
import { auth } from "@clerk/nextjs";
import { isUserAdmin } from "@/lib/utils";

const NavBar = async () => {
  const { userId } = auth();

  const isAdmin = userId && (await isUserAdmin(userId));

  return (
    <>
      <div className="max-sm:block hidden">
        <MobileNavBar isAdmin={isAdmin} />
      </div>
      <div className="max-sm:hidden block">
        <PCNavBar isAdmin={isAdmin} />
      </div>
    </>
  );
};

export default NavBar;
