import { Dialog } from "@headlessui/react";
import React from "react";
import Image from "next/image";
import { Modal } from "@/components/server";

const ImageModal = ({
  isOpen,
  setIsOpen,
  url,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Dialog.Panel className="mx-auto w-full max-w-[64rem] rounded-xl bg-whiteDirty dark:bg-darkDirty p-10">
        <Dialog.Title className="ml-2 mb-2 text-2xl font-bold">
          Carousel image
        </Dialog.Title>
        <div className="pl-2">
          <Image
            src={url}
            alt="carousel image preview"
            className="w-full rounded-lg"
            width={1000}
            height={500}
          />
        </div>
      </Dialog.Panel>
    </Modal>
  );
};

export default ImageModal;
