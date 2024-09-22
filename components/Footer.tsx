"use client";
import React, { FC } from "react";
import Link from "next/link";
import {motion} from "framer-motion"

import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaLine } from "react-icons/fa6";

interface Socials {
  name: string;
  icon: JSX.Element;
  link: string;
}

const Footer: FC = () => {
  const socials: Socials[] = [
    { name: "Facebook", icon: <FaFacebookF />, link: "/" },
    { name: "Instagram", icon: <BiLogoInstagramAlt />, link: "/" },
    { name: "Line", icon: <FaLine />, link: "/" },
  ];
  return (
    <motion.div
      initial={{ y: "20%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 2, duration: 0.6, ease: "easeIn" },
      }}
      className="w-full h-[12dvh] md:h-[15dvh] flex flex-col justify-between bg-zinc-100 bottom-0"
    >
      <div className="w-full container flex flex-col justify-center items-center text-center uppercase text-font2 text-lg md:text-xl my-2 md:my-4">
        <Link href={"/"}>
          <span className="font-extrabold">Hawaii</span>
          <span className="font-semibold">Shark</span>
        </Link>
        <p className="text-xs text-font max-w-[380px] capitalize">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          quasi.
        </p>
      </div>
      <div className="w-full flex justify-between py-2 items-center h-[45px] bg-zinc-200 px-4 md:px-8 lg:px-14 xl:px-32 ">
        <p className="text-xs text-font">&copy; 2024 by Kanidtha</p>
        <div className="flex gap-2 md:gap-4 text-bg">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="p-2 rounded-full bg-font hover:bg-font2 hover:text-primary transition-colors duration-150 ease-out"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
