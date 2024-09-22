"use client";
import React, { FC } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { usePathname } from "next/navigation";

import { FaBars } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { FaStore } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { BsFillFileEarmarkRichtextFill } from "react-icons/bs";

interface Links {
  name: string;
  path: string;
  icon: any;
}

const MobileNav: FC = () => {
  const pathname = usePathname();
  const links: Links[] = [
    {
      name: "home",
      path: "/",
      icon: <GoHomeFill />,
    },
    {
      name: "about",
      path: "/about",
      icon: <FaStore />,
    },
    {
      name: "products",
      path: "/products",
      icon: <AiFillProduct />,
    },
    {
      name: "blog",
      path: "/blog",
      icon: <BsFillFileEarmarkRichtextFill />,
    },
  ];

  return (
    <>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <FaBars className="text-xl text-primary hover:text-color1 hover:scale-110 transition-all duration-150 ease-out" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <span className="font-extrabold">Hawaii</span>
              <span>Shark</span>
            </SheetTitle>
            <SheetDescription>
              <span className="flex flex-col items-start gap-y-2">
                {links.map((link, index) => {
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={link.path}
                        className={`${
                          link.path === pathname &&
                          "text-color1 font-semibold bg-zinc-100"
                        } flex w-full p-2 items-center gap-2 rounded-lg hover:bg-zinc-50`}
                      >
                        <span>{link.icon}</span>
                        <span>{link.name}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </span>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
