"use client";
import React, { FC, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";
import {motion} from "framer-motion"

import { RiShoppingBag2Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { ShopContext } from "@/context/ShopContext";

interface Links {
  name: string;
  path: string;
}

const Navbar: FC = () => {
  const pathname = usePathname();
  const { set_show_search, get_cart_count } = useContext(ShopContext);
  const links: Links[] = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "products", path: "/products" },
    { name: "blog", path: "/blog" },
  ];
  return (
    <motion.nav
      initial={{ y: "-50%", opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
      }}
      className="w-full sticky top-0 flex justify-between gap-4 px-4 md:px-8 lg:px-14 xl:px-32 py-6 z-40 bg-bg
    
    lg:bg-transparent"
    >
      <div className="max-h-[80px] flex items-center justify-center text-xl uppercase text-primary">
        <Link
          href={"/"}
          className="hover:scale-105 transition-all duration-150 ease-out"
        >
          <span className="font-extrabold">Hawaii</span>
          <span className="font-semibold ">Shark</span>
        </Link>
      </div>
      <div className="max-h-[80px] hidden lg:flex px-1 py-1 rounded-full bg-nav backdrop-blur-md">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path ? "bg-bg font-semibold" : "bg-transparent"
            } px-6 py-2.5 rounded-full`}
          >
            <div>
              <p className="text-primary text-base font-base capitalize hover:text-color1 hover:scale-110 transition-all duration-150 ease-out">
                {link.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="max-h-[80px] hidden lg:flex justify-center items-center gap-x-1.5">
        <div
          className={`${
            pathname !== "/products"
              ? "hidden"
              : "bg-nav backdrop-blur-md p-1 rounded-full"
          } `}
        >
          <div
            className="bg-bg p-4 hover:bg-color3 text-font hover:text-color1 transition-all duration-150 ease-out rounded-full cursor-pointer"
            onClick={() => set_show_search(true)}
          >
            <FiSearch className="w-4 h-4" />
          </div>
        </div>
        <div className="relative hidden lg:flex justify-center items-center gap-x-1.5 p-1 rounded-full bg-nav backdrop-blur-md">
          <span className="hidden lg:block text-sm text-secondary ps-2">
            My bag
          </span>
          <Link
            href={"/bags"}
            className={`${
              pathname === "/bags"
                ? "bg-color3 text-color1"
                : "bg-bg p-4 text-primary"
            } rounded-full bg-bg p-4 hover:bg-color3 hover:text-color1 transition-all duration-150 ease-out`}
          >
            <RiShoppingBag2Fill className="hover:scale-110 transition-all duration-150 ease-out" />
          </Link>
          <span
            className={`${
              pathname === "/bags"
                ? "bg-bg border-2 border-color3 text-color3"
                : "bg-color3 border-none text-bg"
            } ${
              get_cart_count() === 0 ? "hidden" : "absolute"
            } right-0 -top-1 flex items-center justify-center  w-6 h-6 text-xs rounded-full `}
          >
            {get_cart_count()}
          </span>
        </div>
      </div>

      <div className="max-h-[80px] lg:hidden flex justify-center items-center gap-4">
        <div
          className={`${
            pathname !== "/products"
              ? "hidden"
              : "text-font hover:text-color1 transition-all duration-150 ease-out rounded-full cursor-pointer"
          } `}
          onClick={() => set_show_search(true)}
        >
          <FiSearch className="w-4 h-4" />
        </div>
        <div className="relative">
          <Link
            href={"/bags"}
            className={`${
              pathname === "/bags" ? "text-color1" : "text-primary"
            } text-xl hover:text-color1 transition-all duration-150 ease-out`}
          >
            <RiShoppingBag2Fill className="hover:scale-110 transition-all duration-150 ease-out" />
          </Link>
          <span
            className={`${
              get_cart_count() === 0 ? "hidden" : "absolute"
            } -right-2 -top-2 flex items-center justify-center bg-color3 w-4 h-4 text-xs rounded-full text-bg`}
          >
            {get_cart_count()}
          </span>
        </div>
        <MobileNav />
      </div>
    </motion.nav>
  );
};

export default Navbar;
