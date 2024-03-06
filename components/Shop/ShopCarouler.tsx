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
import Image from "next/image";
import { Loader } from "../server";

export function ShopCarousel({
  imagesUrl,
  error,
}: {
  imagesUrl: Array<{ data: { publicUrl: string } }>;
  error: any;
}) {
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
    <Suspense fallback={<Loader />}>
      {!error ? (
        <div className="flex justify-center flex-col items-center mt-10">
          <Carousel setApi={setApi} className="max-w-[1100px] mx-5">
            <CarouselContent>
              {imagesUrl.map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={_.data.publicUrl}
                    alt="banner photo"
                    width={1100}
                    height={800}
                    className="rounded-xl object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center flex gap-2">
            {imagesUrl.map((_, index) => (
              <div key={index}>
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
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="max-w-[1100px] mx-5 bg-whiteDirty dark:bg-darkDirty p-10 rounded-lg">
            There was a problem to load photos. <br />
            We are sorry for the problems.
          </div>
        </div>
      )}
    </Suspense>
  );
}
