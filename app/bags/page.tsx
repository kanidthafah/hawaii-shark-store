"use client";
import CartTotal from "@/components/CartTotal";
import { Input } from "@/components/ui/input";
import { ShopContext } from "@/context/ShopContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { TbMoodEmpty } from "react-icons/tb";
import FeaturedProducts from "@/components/FeaturedProducts";
import {motion} from "framer-motion"

interface CartData {
  id: string;
  size: string;
  quantity: number;
}

export default function Bags() {
  const { products, currency, cart_items, update_quantity, get_cart_count } =
    useContext(ShopContext);
  const [cart_data, set_cart_data] = useState<CartData[]>([]);

  const router = useRouter();

  useEffect(() => {
    const temp_data = [];
    for (const items in cart_items) {
      for (const item in cart_items[items]) {
        if (cart_items[items][item] > 0) {
          temp_data.push({
            id: items,
            size: item,
            quantity: cart_items[items][item],
          });
        }
      }
    }
    set_cart_data(temp_data);
  }, [cart_items]);

  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-20 pt-4 pb-20">
      <motion.h1
        initial={{ y: "-20%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
        }}
        className="text-4xl text-font2 mb-6 font-semibold uppercase text-center"
      >
        Your Bag
      </motion.h1>
      <motion.div
        initial={{ y: "-10%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.7, duration: 0.6, ease: "easeIn" },
        }}
      >
        {cart_data.map((item, index) => {
          const product_data = products.find(
            (product) => product.id === Number(item.id)
          );
          return (
            <div
              key={index}
              className="py-4 px-2 border-t border-b text-font2 grid grid-cols-[3.5fr_0.8fr_0.5fr] items-center gap-2"
            >
              <div className="flex items-start gap-2">
                <img
                  src={product_data?.image[0]}
                  alt={product_data?.brand}
                  className="w-24 md:w-36 lg:w-40 object-cover"
                />
                <div>
                  <p className="text-font2 font-semibold text-lg">
                    {product_data?.brand}
                  </p>
                  <div className="flex items-center gap-3 mt-2 ">
                    <p className="text-font2 text-base font-medium">
                      {currency}
                      {product_data?.price}
                    </p>
                    <p className="uppercase text-font text-xs lg:text-sm px-2 py-1 bg-zinc-100 rounded-md">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : update_quantity(
                          Number(item.id),
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="w-full text-center md:w-16 h-10 p-2 rounded-md focus:border-primary"
                />
              </div>
              <div className="flex justify-center">
                <IoTrashBin
                  onClick={() => update_quantity(Number(item.id), item.size, 0)}
                  className="w-6 h-6 text-red-600 hover:text-red-800 hover:scale-110 active:scale-110 transition-all duration-150  cursor-pointer"
                />
              </div>
            </div>
          );
        })}
        <motion.div
          initial={{ y: "-10%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.7, duration: 0.6, ease: "easeIn" },
          }}
          className={`w-full py-28 border-t border-b border-zinc-200 justify-center items-center gap-1.5 ${
            get_cart_count() === 0 ? "flex" : "hidden"
          }`}
        >
          <p className="text-font text-base">Your bag is empty </p>
          <TbMoodEmpty className="text-font w-5 h-5" />
        </motion.div>
        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 1, duration: 0.8, ease: "easeIn" },
          }}
          className={`${
            get_cart_count() === 0 ? "flex" : "hidden"
          } items-center mt-6`}
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-center md:text-start text-font2 font-medium text-base md:text-lg lg:text-lg">
              Featured Hawaii Shirts
            </h3>
            <FeaturedProducts />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "20%", opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 0.7, duration: 0.6, ease: "easeIn" },
        }}
        className={`${
          get_cart_count() === 0 ? "hidden" : "flex"
        } justify-end my-20`}
      >
        <div className="lg:w-[450px] w-full">
          <CartTotal />
          <div className="w-full text-center mt-3">
            <button
              onClick={() => router.push("/place-order")}
              className="bg-font2 hover:bg-black transition-all duration-150 ease-out text-white px-8 py-3 text-sm uppercase active:bg-gray-700"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
