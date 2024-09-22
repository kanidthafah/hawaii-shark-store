"use client";
import React, { FC } from "react";
import { HiFolderDownload } from "react-icons/hi";
interface Outfit {
  id: number;
  title: string;
  img: string;
  description: string;
}

const OutfitItem: FC<Outfit> = ({ id, title, img, description }) => {
  return (
    <div className="border border-zinc-50 shadow-md rounded-md flex flex-col items-center p-2">
      <div className="overflow-hidden rounded-md">
        <img
          src={img}
          alt={`${img}/${id}`}
          className="rounded-md hover:scale-110 duration-150 ease-out transition-all"
        />
      </div>
      <p className="my-2 text-font2 text-sm md::text-base font-medium uppercase">{title}</p>
      <p className="text-font font-light text-xs md:text-sm max-w-md mb-4">
        {description}
      </p>
      <a
        href={img}
        download
        className="w-full flex justify-center items-center gap-1 cursor-pointer p-2 text-sm rounded-md bg-font2 hover:bg-black transition-all duration-150 ease-out text-bg uppercase active:bg-gray-70"
      >
        <span className="text-xl">
          <HiFolderDownload />
        </span>
        <span className="hidden lg:block">Download image</span>
      </a>
    </div>
  );
};

export default OutfitItem;
