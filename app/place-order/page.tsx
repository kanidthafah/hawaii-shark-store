"use client";
import CartTotal from "@/components/CartTotal";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaCcVisa } from "react-icons/fa6";
import { HiQrcode } from "react-icons/hi";
import {motion} from "framer-motion"

export default function PlaceOrder() {
  const [method, set_method] = useState<string>("cod");
  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-40 pt-4 pb-20">
      <div className="w-full flex flex-col lg:flex-row justify-between gap-3 min-h-[80vh] ">
        {/* Left side */}
        <motion.div
          initial={{ x: "-30%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
          className="flex flex-col gap-3 lg:max-w-[480px] w-full"
        >
          <h1 className="text-lg md:text-xl lg:text-2xl text-center lg:text-start my-3 text-font2 font-semibold uppercase">
            Delivery Information
          </h1>
          <div className="flex gap-3 text-sm text-font2">
            <Input
              type="text"
              placeholder="First name"
              className="border border-zinc-200 rounded-sm py-1 px-2 w-full h-10"
            />
            <Input
              type="text"
              placeholder="Last name"
              className="border border-zinc-200 rounded-sm py-1 px-2 w-full h-10"
            />
          </div>
          <Input
            type="email"
            placeholder="Email"
            className="border border-zinc-200 rounded-sm py-1 px-2 w-full text-font2 h-10"
          />
          <Input
            type="text"
            placeholder="Address"
            className="border border-zinc-200 rounded-sm py-1 px-2 w-full text-font2 h-10"
          />
          <div className="flex gap-3 text-sm text-font2">
            <Input
              type="text"
              placeholder="City"
              className="border border-zinc-200 rounded-sm py-1 px-2 w-full h-10"
            />
            <Input
              type="text"
              placeholder="Zip code"
              className="border border-zinc-200 rounded-sm py-1 px-2 w-full h-10"
            />
          </div>
          <Input
            type="text"
            placeholder="Phone"
            className="border border-zinc-200 rounded-sm py-1 px-2 w-full text-font2 h-10"
          />
        </motion.div>
        {/* Right side */}
        <motion.div
          initial={{ x: "30%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
        >
          <div className="min-w-80">
            <CartTotal />
          </div>
          <div className="flex lg:flex-row flex-col gap-3 mt-10">
            <div
              onClick={() => set_method("visa")}
              className="flex items-center border border-zinc-200 rounded-sm p-2 px-3 cursor-pointer gap-3"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "visa" ? "bg-teal-700" : ""
                }`}
              ></p>
              <FaCcVisa className="text-base" />
            </div>
            <div
              onClick={() => set_method("qr-code")}
              className="flex items-center border border-zinc-200 rounded-sm p-2 px-3 cursor-pointer gap-3"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "qr-code" ? "bg-teal-700" : ""
                }`}
              ></p>
              <HiQrcode className="text-base" />
            </div>
            <div
              onClick={() => set_method("cod")}
              className="flex items-center border border-zinc-200 rounded-sm p-2 px-3 cursor-pointer gap-2"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-teal-700" : ""
                }`}
              ></p>
              <p className="uppercase text-font2 text-sm">Cash on delivery</p>
            </div>
          </div>
          <div className="w-full text-center mt-4">
            <button className="bg-font2 hover:bg-black transition-all duration-150 ease-out text-white px-8 py-3 text-sm uppercase active:bg-gray-700">
              Place order
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
