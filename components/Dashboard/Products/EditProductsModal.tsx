"use client";
import { Button, Modal } from "@/components/server";
import { Dialog } from "@headlessui/react";
import React, { useState } from "react";

const EditProductsModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Dialog.Panel className="mx-auto w-full max-w-[64rem] rounded-xl bg-whiteDirty dark:bg-darkDirty p-10">
        <Dialog.Title className="ml-2 mb-2 text-2xl font-bold">
          Carousel image
        </Dialog.Title>
        <div className="pl-2"></div>
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
          >
            Update
          </Button>
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default EditProductsModal;
