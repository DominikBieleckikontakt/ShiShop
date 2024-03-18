import React from "react";

import { Menu } from "../server";
import { MotionDiv, PanelDisplayer } from "../client";
import CarouselPanel from "./Carousel/CarouselPanel";

const options = [
  { title: "Carousel of images", component: <CarouselPanel /> },
  { title: "Products", component: <>products</> },
];

const variants = {
  hidden: { opacity: 0, translateY: "20%" },
  visible: { opacity: 1, translateY: "0%" },
};

const AdminDashboard = () => {
  return (
    <MotionDiv
      className="mx-5 max-md:flex-col md:mx-auto max-w-[64rem] my-48 rounded-lg bg-whiteDirty dark:bg-darkDirty flex shadow-lg"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0,
      }}
      viewport={{ amount: 0, once: true }}
    >
      <Menu options={options} />
      <PanelDisplayer options={options} />
    </MotionDiv>
  );
};

export default AdminDashboard;
