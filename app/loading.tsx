import { Loader } from "@/components/server";
import React from "react";

const LoadingPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <Loader />
    </main>
  );
};

export default LoadingPage;
