"use client";
import React, { useState, Fragment, useRef } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import { Button } from "../server";
import { Checkbox } from "../client";
import { FilterTypes } from "@/types";

const FilterButton = ({
  categories,
  onChangeFilters,
}: {
  categories: { id: bigint; name: string }[];
  onChangeFilters: (filters: FilterTypes) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [warning, setWarning] = useState<string>("");
  const [checkedCategories, setCheckedCategories] = useState<Array<string>>([]);

  const minValueRef = useRef<HTMLInputElement>(null);
  const maxValueRef = useRef<HTMLInputElement>(null);

  const onConfirmHandler = () => {
    const minValue = Number(minValueRef.current?.value);
    const maxValue = Number(maxValueRef.current?.value);

    if (minValue !== 0 && maxValue === 0) {
      setWarning("First value shouldn't be greater or equal to the second one");
      return;
    }

    if (minValue >= maxValue && maxValue !== 0) {
      setWarning("First value shouldn't be greater or equal to the second one");
      return;
    }

    setWarning("");

    const allCategories = categories.map((categorie) => categorie.name);

    onChangeFilters({
      categories:
        checkedCategories.length > 0 ? checkedCategories : allCategories,
      minPrice: minValue,
      maxPrice: maxValue,
    });

    setCheckedCategories([]);

    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="bg-whiteDirty dark:bg-darkDirty border-none p-1 hover:scale-105 duration-300"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Image
          src="/icons/dark-filter.svg"
          alt="filter icon"
          width={48}
          height={48}
          className="dark:invert"
        />
      </Button>
      {isOpen && (
        <Transition show={isOpen} as={Fragment}>
          <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30" aria-hidden={true} />
            </Transition.Child>
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-auto w-full max-w-[64rem] rounded-xl bg-whiteDirty dark:bg-darkDirty p-10">
                  <Dialog.Title className="text-2xl font-bold">
                    Filter our products
                  </Dialog.Title>
                  <div className="pl-2">
                    <h2 className="text-lg">By categories:</h2>
                    {categories.map((item, index) => (
                      <div key={index} className="flex items-center my-2">
                        <Checkbox
                          id={item.name}
                          className="data-[state=checked]:bg-primary data-[state=checked]:border-primary dark:data-[state=checked]:bg-primary dark:data-[state=checked]:border-primary"
                          onCheckedChange={(checked) => {
                            return checked
                              ? setCheckedCategories((prev) => [
                                  ...prev,
                                  item.name,
                                ])
                              : setCheckedCategories((prev) =>
                                  prev.filter((value) => value !== item.name)
                                );
                          }}
                        />
                        <label
                          htmlFor={item.name}
                          className="cursor-pointer pl-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {item.name}
                        </label>
                      </div>
                    ))}
                    <h2 className="text-lg mt-10">By price:</h2>
                    <div>
                      <input
                        type="number"
                        placeholder="From..."
                        ref={minValueRef}
                        className="p-2 rounded-md outline-none"
                      />{" "}
                      -{" "}
                      <input
                        type="number"
                        placeholder="To..."
                        ref={maxValueRef}
                        className="p-2 rounded-md outline-none"
                      />
                      <p className="mt-1 text-sm text-red-600">{warning}</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-5">
                    <Button
                      size="lg"
                      variant="destructive"
                      onClick={() => setIsOpen(false)}
                      className="mx-5 bg-red-500 hover:scale-105"
                    >
                      Close
                    </Button>
                    <Button
                      size="lg"
                      variant="primary"
                      className="bg-primary hover:scale-105"
                      onClick={onConfirmHandler}
                    >
                      Filter
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default FilterButton;
