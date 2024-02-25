"use client";
import Image from "next/image";
import React from "react";

import { ReactTyped } from "react-typed";
import { MotionDiv } from "../UI/MotionDiv";
import ImagesBackground from "./ImagesBackground";

const variants = {
  hidden: { opacity: 0, translateY: "50%" },
  visible: { opacity: 1, translateY: "0%" },
};

const Hero = () => {
  return (
    <div className="h-[calc(100svh-5rem)] overflow-hidden relative -z-10">
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          ease: "easeInOut",
          duration: 1.5,
        }}
        viewport={{ amount: 0, once: true }}
        className="rounded-xl flex flex-col items-center justify-center mx-5"
      >
        <Image
          alt="company logo"
          src={`/icons/primary-logo.svg`}
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
          className="rounded-xl mt-10"
        />
        <div className="my-5 text-5xl lg:text-8xl text-primary">Shi-Shop</div>
        <div className="flex-row flex my-10 text-3xl lg:text-6xl font-light italic text-accent">
          <ReactTyped
            strings={["Ambition,"]}
            typeSpeed={60}
            showCursor={false}
            className="mx-1"
            startDelay={800}
          />
          <ReactTyped
            strings={["Love,"]}
            typeSpeed={60}
            showCursor={false}
            startDelay={1600}
            className="mx-1"
          />
          <ReactTyped
            strings={["Passion"]}
            typeSpeed={60}
            showCursor={false}
            startDelay={2100}
            className="mx-1"
          />
        </div>
      </MotionDiv>
      <ImagesBackground />
    </div>
  );
};

export default Hero;
