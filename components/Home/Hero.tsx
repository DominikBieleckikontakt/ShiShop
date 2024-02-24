"use client";
import Image from "next/image";
import React from "react";

import { ReactTyped } from "react-typed";
import { MotionDiv } from "../UI/MotionDiv";

const variants = {
  hidden: { opacity: 0, translateY: "50%" },
  visible: { opacity: 1, translateY: "0%" },
};

const Hero = () => {
  return (
    <div className="h-[calc(100svh-5rem)] w-full">
      <MotionDiv
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{
          ease: "easeInOut",
          duration: 1,
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
        <div className="md:flex-row flex flex-col my-10 text-3xl lg:text-6xl font-light italic text-accent">
          <ReactTyped
            strings={["Ambition,"]}
            typeSpeed={60}
            showCursor={false}
            className="mx-1"
          />
          <ReactTyped
            strings={["Love,"]}
            typeSpeed={60}
            showCursor={false}
            startDelay={800}
            className="mx-1"
          />
          <ReactTyped
            strings={["Passion"]}
            typeSpeed={60}
            showCursor={false}
            startDelay={1400}
            className="mx-1"
          />
        </div>
      </MotionDiv>
    </div>
  );
};

export default Hero;
