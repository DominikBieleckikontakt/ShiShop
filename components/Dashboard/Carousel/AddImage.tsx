"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { Button, Input, Loader } from "@/components/server";
import { Label } from "@/components/client";
import { createImage } from "@/lib/utils";

const AddImage = () => {
  const [file, setFile] = useState<File>();
  const [name, setName] = useState<string>();
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file && name) {
      setIsLoading(true);
      const { error } = await createImage(file, name);

      if (error) {
        setMessage(
          "An error occured during uploading your file. Sorry for problems."
        );
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setName("");
        setFile(undefined);
        toast.success("Image uploaded", {
          className: "dark:bg-[#222222] dark:text-white",
        });
        setMessage("You need to refresh page, to see new image");
      }
    } else {
      setIsLoading(false);
      setMessage("Please enter name and file (image)");
    }
  };

  const onFileSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="max-w-sm">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="name">Image name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
          />
          <Label htmlFor="picture">Choose image</Label>
          <Input
            id="picture"
            type="file"
            name="image"
            onChange={onFileSelectHandler}
          />
        </div>
        <div className="w-full flex justify-end mt-5">
          <Button
            type="submit"
            variant="primary"
            className="w-[8rem] hover:scale-105"
            disabled={isLoading}
          >
            {!isLoading ? (
              <>Upload image</>
            ) : (
              <Loader className="border-white size-5" />
            )}
          </Button>
        </div>
      </form>
      {message.length > 0 && (
        <p className="font-bold text-red-500 mt-2">{message}</p>
      )}
    </>
  );
};

export default AddImage;
