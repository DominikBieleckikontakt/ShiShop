import React from "react";
import { Menu } from "../server";
import { PanelDisplayer } from "../client";

const options = [
  { title: "Carousel of images", component: <>carosuel</> },
  { title: "Products", component: <>products</> },
];

const AdminDashboard = () => {
  return (
    <div className="mx-5 max-md:flex-col md:mx-auto max-w-[64rem] mt-48 rounded-lg bg-whiteDirty dark:bg-darkDirty flex">
      <Menu options={options} />
      {/* VIEW */}
      <PanelDisplayer options={options} />
    </div>
  );
};

export default AdminDashboard;
