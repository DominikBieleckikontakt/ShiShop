"use client";
import React from "react";
import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <main className="flex justify-center w-full h-full mt-20">
      <SignUp />
    </main>
  );
};

export default Page;
