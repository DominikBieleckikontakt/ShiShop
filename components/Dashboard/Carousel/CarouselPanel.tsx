import React from "react";

import { getImages } from "@/lib/utils";
import { Images } from "../../client";

const CarouselPanel = async () => {
  const { arrayOfImagesUrl, error } = await getImages();

  return (
    <div>
      <h1 className="text-2xl font-light">Manage carousel of images</h1>
      <p className="mt-2">All images: </p>
      {!error ? (
        <Images allImages={arrayOfImagesUrl} />
      ) : (
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="max-w-[1100px] mx-5 bg-whiteDirty dark:bg-darkDirty p-10 rounded-lg">
            There was a problem to load photos. <br />
            We are sorry for the problems.
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselPanel;
