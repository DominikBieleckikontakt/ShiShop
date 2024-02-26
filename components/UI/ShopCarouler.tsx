"use client";
import React from "react";
import { type CarouselApi } from "./carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export function ShopCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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

  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <span className="text-4xl font-semibold">{index + 1 + 10}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center flex gap-2">
        {Array.from({ length: count }).map((item, index) => {
          console.log("index: " + index + " current: " + (current - 1));
          return (
            <>
              {index === current - 1 ? (
                <div className={`size-2 bg-primary rounded-full`} />
              ) : (
                <div
                  className={`size-2 bg-slate-300 dark:bg-slate-500 rounded-full cursor-pointer`}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
