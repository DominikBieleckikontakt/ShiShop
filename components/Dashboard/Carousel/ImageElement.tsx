"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import { Trash, Scaling } from "lucide-react";

import { Button, ImageModal, Loader } from "@/components/server";

const ImageElement = ({
  url,
  index,
  onDelete,
}: {
  url: string;
  index: number;
  onDelete: (index: number) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDeleteHandler = () => {
    onDelete(index);
  };

  const onScaleHandler = () => {
    setIsOpen(true);
  };

  return (
    <Suspense fallback={<Loader />}>
      <div className="rounded-lg bg-white/50 dark:bg-[#222222]">
        {isOpen && (
          <ImageModal isOpen={isOpen} setIsOpen={setIsOpen} url={url} />
        )}
        <Image
          src={url}
          alt={`Carousel image: ${index}`}
          width={200}
          height={150}
          className="rounded-lg w-[30rem]"
          quality={100}
        />
        <Button
          variant="outline"
          className="hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 duration-300 size-10 p-2 m-2 border-none"
          onClick={onDeleteHandler}
        >
          <Trash />
        </Button>
        <Button
          variant="outline"
          className="hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 duration-300 size-10 p-2 m-2 border-none"
          onClick={onScaleHandler}
        >
          <Scaling />
        </Button>
      </div>
    </Suspense>
  );
};

export default ImageElement;
