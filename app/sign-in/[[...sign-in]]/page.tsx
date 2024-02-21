import React from "react";
import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <main className="flex justify-center w-full h-full mt-20">
      <SignIn />
    </main>
  );
};

export default Page;
