"use client";
import OutfitItem from "@/components/OutfitItem";
import { useState, useEffect } from "react";
import { outfit } from "@/assests/assets";
import {motion} from "framer-motion"

interface Outfit {
  id: number;
  title: string;
  img: string;
  description: string;
}

export default function Blog() {
  const [outfits, set_outfits] = useState<Outfit[]>([]);

  useEffect(() => {
    set_outfits(outfit);
  }, []);

  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-20 pt-4 pb-20">
      <div className="flex flex-col items-center mb-8 gap-2">
        <motion.h1
          initial={{ y: "-20%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
          className="text-3xl md:text-4xl lg:text-6xl text-font2 font-medium uppercase"
        >
          Outfit Idea
        </motion.h1>
        <motion.p
          initial={{ y: "-10%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
          }}
          className="text-font text-sm md:text-base font-light max-w-[880px] text-center"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          maiores eligendi incidunt eos tenetur laborum, rerum, corporis optio
          ullam nemo velit sequi quae in amet commodi exercitationem mollitia
          saepe tempora?
        </motion.p>
      </div>
      <motion.div
        initial={{ y: "20%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 1, duration: 0.6, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {outfits.map((item, index) => (
          <OutfitItem
            key={index}
            id={item.id}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </motion.div>
    </div>
  );
}
