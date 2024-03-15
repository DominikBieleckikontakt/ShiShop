"use client";
import React, { Suspense } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../UI/carousel";
import { Loader } from "../server";
import { MenuOptionsStore } from "@/types";
import { useOptionsStore } from "@/lib/store";

const MobileMenu = ({ options }: { options: MenuOptionsStore[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const changeIndex = useOptionsStore((state) => state.changeIndex);
  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    console.log(current);
    changeIndex(current - 1);
  }, [current]);

  return (
    <Suspense fallback={<Loader />}>
      <div className="flex justify-center flex-col items-center my-5">
        <Carousel setApi={setApi} className="mx-5 text-center">
          <CarouselContent>
            {options.map((item, index) => (
              <CarouselItem key={index}>
                <h1 className="text-xl text-primary">{item.title}</h1>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Suspense>
  );
};

export default MobileMenu;
