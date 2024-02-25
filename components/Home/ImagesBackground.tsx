import React from "react";
import Image from "next/image";

const ImagesBackground = () => {
  return (
    <>
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className={`opacity-20 absolute top-[25rem] left-[2rem] md:top-[25rem] md:left-[5rem] sm:size-48 md:size-64 xl:left-[10rem] xl:top-[20rem] -rotate-[35deg]`}
      />
      <Image
        alt="tshirt"
        src="/icons/tshirt-black.svg"
        width={150}
        height={150}
        className="opacity-20 absolute top-[4rem] left-[10rem] sm:top-[4rem] sm:left-[25rem] md:top-[4rem] md:left-[30rem] lg:left-[50rem] xl:top-[5rem] xl:left-[60rem] 2xl:top-[4rem] 2xl:left-[80rem] size-64 md:size-96 rotate-[35deg]"
      />
    </>
  );
};

export default ImagesBackground;
