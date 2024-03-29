"use client";
import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { SignOutButton, useAuth } from "@clerk/nextjs";

import { Button } from "../../server";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNavBar = ({
  isAdmin,
}: {
  isAdmin: string | boolean | null | undefined;
}) => {
  const { setTheme, theme } = useTheme();
  const [isHidden, setIsHidden] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const { userId } = useAuth();

  const pathname = usePathname();

  const toggleTheme = () => {
    theme === "dark" && setTheme("light");
    theme === "light" && setTheme("dark");
    setIsToggled(!isToggled);
  };

  return (
    <nav className="p-10 px-6 sm:px-12 md:px-24 bg-whiteDirty dark:bg-darkDirty shadow-sm items-center z-50 relative">
      {isHidden ? (
        <div className="flex justify-between">
          <div className="cursor-pointer" onClick={() => setIsHidden(false)}>
            <Image
              src="/icons/menu-dark.svg"
              alt="menu"
              width={42}
              height={42}
              className="dark:invert"
            />
          </div>

          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="mr-2 md:mr-5 dark:bg-darkDirty hover:scale-105 bg-white border-slate-200 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50"
            >
              <Sun className="rotate-100 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Moon className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all duration-300",
            !isHidden && "translate-x-0"
          )}
        >
          <div className="bg-whiteDirty dark:bg-darkDirty absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex flex-col w-56 items-start">
            <div onClick={() => setIsHidden(true)}>
              <Image
                src="/icons/close-dark.svg"
                alt="menu"
                width={42}
                height={42}
                className="mt-0 mb-8 text-3xl cursor-pointer dark:invert"
              />
            </div>
            <div className="flex flex-col">
              {navbarLinks.map((item, index) => (
                <p className="text-xl font-light my-2" key={index}>
                  <Link
                    href={item.url}
                    className={`hover:text-accent duration-500 ${
                      pathname === item.url && "text-accent"
                    }`}
                    onClick={() => {
                      setIsHidden(true);
                    }}
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
              {isAdmin && (
                <p className="text-xl font-light my-2">
                  <Link
                    href={"/dashboard"}
                    className={`hover:text-accent duration-500 ${
                      pathname === "/dashboard" && "text-accent"
                    }`}
                    onClick={() => {
                      setIsHidden(true);
                    }}
                  >
                    Dashboard
                  </Link>
                </p>
              )}
            </div>
            {!userId ? (
              <div className="flex flex-col">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary dark:border-primary dark:text-white hover:bg-primary hover:dark:bg-primary hover:scale-105 hover:text-white my-2"
                  asChild
                  onClick={() => {
                    setIsHidden(true);
                  }}
                >
                  <Link href="/sign-in">Log in</Link>
                </Button>
                <Button
                  className="bg-primary dark:bg-primary dark:text-white hover:bg-accent hover:dark:bg-accent hover:scale-105 my-2"
                  size="lg"
                  asChild
                  onClick={() => {
                    setIsHidden(true);
                  }}
                >
                  <Link href="/sign-up">Sign up</Link>
                </Button>
              </div>
            ) : (
              <SignOutButton>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary dark:border-primary dark:text-white hover:bg-primary hover:dark:bg-primary hover:scale-105 hover:text-white my-2"
                  onClick={() => {
                    setIsHidden(true);
                  }}
                >
                  Log Out
                </Button>
              </SignOutButton>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavBar;
