import React from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

import { Button } from "@/components/server";

const ImageElement = ({
  url,
  index,
  onDelete,
}: {
  url: string;
  index: number;
  onDelete: (index: number) => void;
}) => {
  const onDeleteHandler = () => {
    onDelete(index);
  };

  return (
    <div className="rounded-lg bg-white/50 dark:bg-[#222222]">
      <Image
        src={url}
        alt={`Carousel image: ${index}`}
        width={200}
        height={200}
        className="rounded-lg w-[30rem]"
        quality={100}
      />
      <Button
        variant="outline"
        className="hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 duration-300 size-10 p-2 m-2"
        onClick={onDeleteHandler}
      >
        <Trash />
      </Button>
    </div>
  );
};

export default ImageElement;
