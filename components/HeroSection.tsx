"use client";
import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
  return (
    <div className="h-full flex flex-col xl:flex-row items-center justify-between gap-3">
      <div className="flex flex-col gap-y-1.5 text-center xl:text-left order-2 xl:order-none text-font2">
        <motion.h1
          initial={{ y: "-20%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
          }}
          className="text-2xl md:text-4xl lg:text-6xl uppercase font-bold"
        >
          Hawaii Shark
        </motion.h1>
        <motion.h3
          initial={{ y: "-10%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.8, duration: 0.6, ease: "easeIn" },
          }}
          className="text-base md:text-lg lg:text-2xl"
        >
          Fashion Forward, Wallet Friendly
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.6, ease: "easeIn" },
          }}
          className="max-w-[600px] text-md font-light text-xs md:text-sm lg:text-base my-1 lg:my-3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure amet,
          nemo, voluptates perferendis perspiciatis, molestiae recusandae quasi
          nam culpa sed temporibus architecto neque. Delectus voluptates,
          deserunt eligendi cumque odio ex.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-end items-center order-1 xl:order-none w-[298px] h-[250px] xl:w-[498px] xl:h-[450px]"
      >
        <Image
          src="/hero-img.png"
          width={400}
          height={300}
          alt=""
          className="object-contain aspect-[4/3]"
          priority
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
