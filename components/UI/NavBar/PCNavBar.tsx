"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../../server";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

const PCNavBar = () => {
  const { setTheme, theme } = useTheme();
  const { userId } = useAuth();

  const toggleTheme = () => {
    theme === "dark" && setTheme("light");
    theme === "light" && setTheme("dark");
  };

  return (
    <nav className="p-10 px-6 sm:px-12 md:px-24 flex justify-between bg-whiteDirty dark:bg-darkDirty shadow-sm items-center">
      <div className="flex">
        <p className="text-xl font-light pr-5">
          <Link href="/" className="hover:text-accent duration-500 ">
            Home
          </Link>
        </p>
        <p className="text-xl font-light pl-5">
          <Link
            href="#contact-section"
            className="duration-500 hover:text-accent"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact-section")!
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us
          </Link>
        </p>
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
