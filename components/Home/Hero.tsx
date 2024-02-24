import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[calc(100svh-5rem)] w-full bg-red-500">
      <div className="rounded-xl flex justify-center mx-5">
        <Image
          alt="company logo"
          src="/images/shop-logo.png"
          width={800}
          height={800}
          style={{ objectFit: "contain" }}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
