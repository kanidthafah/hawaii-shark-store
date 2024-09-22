"use client";
import { ShopContext } from "@/context/ShopContext";
import { Input } from "./ui/input";
import { IoCloseCircle } from "react-icons/io5";
import React, { FC, useContext, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";

const SearchBar: FC = () => {
  const { search, set_search, show_search, set_show_search } =
    useContext(ShopContext);
  const [visible, set_visible] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("products")) {
      set_visible(true);
    } else {
      set_visible(false);
    }
  }, [pathname]);
  return show_search && visible ? (
    <div className="text-center w-full">
      <div className="relative inline-flex items-center justify-center">
        <Input
          value={search}
          onChange={(e) => set_search(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 md:h-12 w-3/4 md:w-80 lg:w-96 xl:w-[42rem] rounded-xl"
        />
        <FiSearch className="w-4 h-4 absolute right-2 text-zinc-500" />
      </div>
      <IoCloseCircle
        className="inline w-6 h-6 text-font hover:text-font2 duration-150 transition-colors cursor-pointer mx-1"
        onClick={() => set_show_search(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
