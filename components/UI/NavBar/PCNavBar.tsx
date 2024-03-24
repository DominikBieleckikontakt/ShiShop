"use client";
import React, { useEffect } from "react";
import { Sun, Moon, ShoppingCart } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

import { useCartStore } from "@/lib/store";
import { Button } from "../../server";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Badge } from "../badge";

const PCNavBar = ({
  isAdmin,
  cart,
  isNew,
}: {
  isAdmin: string | boolean | null | undefined;
  cart:
    | {
        items: [];
        totalQuantity: number;
        totalPrice: number;
      }
    | any;
  isNew: boolean;
}) => {
  const { setTheme, theme } = useTheme();
  const { userId } = useAuth();
  const pathname = usePathname();
  const totalAmount = useCartStore((state) => state.totalAmount);
  const items = useCartStore((state) => state.items);

  const setCart = useCartStore((state) => state.setCart);

  useEffect(() => {
    if (!userId) {
      // GET DATA FROM LOCAL STORAGE AND PUT IN STATE
      if (typeof window !== "undefined") {
        if (localStorage.getItem("cart") !== null) {
          const localObject = JSON.parse(localStorage.getItem("cart")!);
          setCart(
            localObject.items,
            localObject.totalAmount,
            localObject.totalPrice
          );
        } else {
          setCart([], 0, 0);
        }
      }
    } else {
      if (
        typeof window !== "undefined" &&
        localStorage.getItem("cart") !== null &&
        isNew
      ) {
        const { items, totalAmount, totalPrice } = JSON.parse(
          localStorage.getItem("cart")!
        );
        fetch("/api/sendToDb", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            items,
            totalAmount,
            totalPrice,
          }),
        })
          .then((res) => res.json())
          .then(() => localStorage.removeItem("cart"));
      }
      setCart(cart.items || [], cart.totalQuantity || 0, cart.totalPrice || 0);
    }
  }, [userId, cart]);

  const toggleTheme = () => {
    theme === "dark" && setTheme("light");
    theme === "light" && setTheme("dark");
  };

  return (
    <nav className="p-10 px-6 sm:px-12 md:px-24 flex justify-between bg-whiteDirty dark:bg-darkDirty shadow-sm items-center">
      <div className="flex">
        {navbarLinks.map((item, index) => (
          <p className="text-xl font-light pr-5" key={index}>
            <Link
              href={`${item.url}`}
              className={`hover:text-accent duration-500 ${
                pathname === item.url && "text-accent"
              }`}
            >
              {item.name}
            </Link>
          </p>
        ))}
        {isAdmin && (
          <p className="text-xl font-light pr-5">
            <Link
              href={`/dashboard`}
              className={`hover:text-accent duration-500 ${
                pathname === "/dashboard" && "text-accent"
              }`}
            >
              Dashboard
            </Link>
          </p>
        )}
      </div>
      <div className="flex items-center">
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="relative mr-2 md:mr-5 dark:bg-darkDirty hover:scale-105 bg-white border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart />
              <Badge className="absolute top-5 left-6 px-[0.4rem]">
                {totalAmount}
              </Badge>
            </Link>
          </Button>
          <div className="absolute top-16 w-24 bg-slate-400">sadas</div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="mr-2 md:mr-5 dark:bg-darkDirty hover:scale-105 bg-white border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50"
        >
          <Sun className="rotate-100 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <Moon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
        </Button>
        {!userId ? (
          <>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary dark:border-primary text-black bg-white hover:bg-whiteDirty dark:text-white dark:bg-transparent hover:dark:bg-[#2e2e2e] hover:scale-105 mr-5 dark:hover:text-white"
            >
              <Link href="sign-in">Log in</Link>
            </Button>
            <Button
              className=" dark:text-white bg-gradient-to-r from-primary to-accent hover:scale-105"
              size="lg"
              asChild
            >
              <Link href="sign-up">Sign up</Link>
            </Button>
          </>
        ) : (
          <SignOutButton>
            <Button
              variant="outline"
              size="lg"
              className="border-primary dark:border-primary dark:text-white hover:bg-primary hover:dark:bg-primary hover:scale-105 hover:text-white my-2"
            >
              Log Out
            </Button>
          </SignOutButton>
        )}
      </div>
    </nav>
  );
};

export default PCNavBar;
