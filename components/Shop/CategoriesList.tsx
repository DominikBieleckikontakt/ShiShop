import React from "react";

const CategoriesList = ({ categories }: { categories: string[] }) => {
  return (
    <ul className="flex gap-2">
      {categories.map((item, index) => (
        <li
          key={index}
          className="bg-slate-200 dark:text-black rounded-full px-2 p-1 text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
