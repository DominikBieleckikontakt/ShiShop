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
    <div className="mb-10">
      <input
        className="rounded-lg bg-whiteDirty dark:bg-darkDirty outline-none p-3 w-full max-w-[400px]"
        placeholder="Search for a product..."
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};

export default SearchBar;
