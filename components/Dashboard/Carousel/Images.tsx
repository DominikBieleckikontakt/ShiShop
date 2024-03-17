"use client";
import React, { useState } from "react";
import ImageElement from "./ImageElement";
import { deleteImage } from "@/lib/utils";
import toast from "react-hot-toast";

type imagesType = {
  data: { publicUrl: string };
};

const Images = ({ allImages }: { allImages: imagesType[] }) => {
  const [images, setImages] = useState(allImages);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-1 w-full">
      {images.length === 0 && (
        <p className="font-bold">There are no images in carousel</p>
      )}
      {errorMsg !== "" && <p>{errorMsg}</p>}
      {images?.map((item, index) => (
        <div key={index} className="flex w-full justify-center">
          <ImageElement
            url={item.data.publicUrl}
            index={index}
            onDelete={async (index) => {
              setIsLoading(true);
              toast.loading("Deleting... ", {
                className: "dark:bg-[#222222] dark:text-white",
              });
              const { data, error } = await deleteImage(
                allImages[index].data.publicUrl,
                "folder"
              );

              if (!error) {
                setImages(
                  images.filter(
                    (image) => image.data.publicUrl !== item.data.publicUrl
                  )
                );
                toast.dismiss();
                toast.success("Image deleted successfully", {
                  className: "dark:bg-[#222222] dark:text-white",
                });
              } else {
                setErrorMsg("An error occured during loading images!");
                toast.dismiss();
                toast.error("Something gone wrong!", {
                  className: "dark:bg-[#222222] dark:text-white",
                });
              }
              setIsLoading(false);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Images;
