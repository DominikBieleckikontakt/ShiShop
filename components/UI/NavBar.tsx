import React from "react";
import { MobileNavBar, PCNavBar } from "../client";
import { auth } from "@clerk/nextjs";
import {
  checkIfUserExists,
  getCartFromDatabase,
  isUserAdmin,
} from "@/lib/utils";

const NavBar = async () => {
  const { userId } = auth();

  const isAdmin = userId && (await isUserAdmin(userId));
  let cart = undefined;
  let isUserNew = false;

  if (userId) {
    cart = await getCartFromDatabase(userId);
    isUserNew = await checkIfUserExists(userId);
  }

  return (
    <>
      <div className="max-sm:block hidden">
        <MobileNavBar
          isAdmin={isAdmin}
          cart={cart !== undefined ? cart : {}}
          isNew={isUserNew}
        />
      </div>
      <div className="max-sm:hidden block">
        <PCNavBar
          isAdmin={isAdmin}
          cart={cart !== undefined ? cart : {}}
          isNew={isUserNew}
        />
      </div>
    </>
  );
};

export default NavBar;
