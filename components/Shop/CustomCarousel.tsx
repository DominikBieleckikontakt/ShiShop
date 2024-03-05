import React from "react";
import { getImages } from "@/lib/utils";
import { MotionDiv, ShopCarousel } from "../client";

const variants = {
  hidden: { opacity: 0, translateY: "20%" },
  visible: { opacity: 1, translateY: "0%" },
};

const CustomCarousel = async () => {
  const { arrayOfImagesUrl, error } = await getImages();

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        ease: "easeInOut",
        duration: 1.5,
      }}
      viewport={{ amount: 0, once: true }}
    >
      <ShopCarousel imagesUrl={arrayOfImagesUrl} error={error} />
    </MotionDiv>
  );
};

export default CustomCarousel;
