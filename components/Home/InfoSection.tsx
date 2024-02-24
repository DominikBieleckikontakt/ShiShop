import { InfoSectionProps } from "@/types";
import Image from "next/image";
import React from "react";

const InfoSection = ({ title, image, children, id }: InfoSectionProps) => {
  return (
    <section className="my-48 text-darkDirty dark:text-whiteDirty" id={id}>
      <h1 className="font-bold text-2xl">{title}</h1>
      <div className="flex mb-10">
        <div className="h-2 w-8 bg-primary rounded" />
        <div className="h-2 w-5 bg-primary rounded ml-2" />
        <div className="h-2 w-3 bg-primary rounded ml-2" />
      </div>
      <p>{children}</p>
      {image && <Image src="" width={0} height={0} alt="" />}
    </section>
  );
};

export default InfoSection;
