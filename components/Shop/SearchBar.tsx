"use client";
import React, { ChangeEvent, useState } from "react";

const SearchBar = ({
  onChangeFilter,
}: {
  onChangeFilter: (filter: string) => void;
}) => {
  const [filter, setFilter] = useState("");

  const changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    onChangeFilter(e.target.value);
  };

  return (
    <input
      className="rounded-lg bg-whiteDirty dark:bg-darkDirty outline-none p-3 w-full max-w-[400px] focus-visible:border-primary border border-transparent"
      placeholder="Search for a product..."
      value={filter}
      onChange={changeFilter}
    />
  );
};

export default SearchBar;
