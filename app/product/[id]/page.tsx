"use client";
import RelatedProducts from "@/components/RelatedProducts";
import { ShopContext } from "@/context/ShopContext";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import {motion} from "framer-motion"

interface Products {
  id: number;
  brand: string;
  price: number;
  size: string[];
  image: string[];
  fabric: string;
  detail: string;
  featured: boolean;
  date: number;
}

export default function Product() {
  const { id } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [product_data, set_product_data] = useState<Products | null>(null); // Initialized as null
  const [image, set_image] = useState<string>("");
  const [size, set_size] = useState<string>("");

  const fetchData = () => {
    products.map((item) => {
      if (item.id === Number(id)) {
        set_product_data(item);
        set_image(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [id, products]);

  return product_data ? (
    <div className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-20 pt-4 pb-20">
      <div className="pt-10 opacity-100 transition-opacity ease-in-out duration-500 delay-75 ">
        <div className="flex gap-12 lg:flex-row flex-col ">
          {/* product image */}
          <motion.div
            initial={{ x: "-20%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
            }}
            className="flex-1 flex lg:flex-row flex-col-reverse gap-3"
          >
            <div className="flex lg:flex-col flex-row  lg:overflow-y-scroll  overflow-x-auto lg:justify-normal justify-between lg:w-[18.7%] w-full">
              {product_data.image.map((item, index) => (
                <div
                  key={index}
                  className="w-[24%] lg:w-full lg:mb-3 mb-0 flex-shrink-0 cursor-pointer overflow-hidden"
                >
                  <img
                    src={item}
                    alt={item}
                    className={`w-full h-full hover:scale-125 transition-all duration-150 ease-out`}
                    onClick={() => set_image(item)}
                  />
                </div>
              ))}
            </div>
            <div className="lg:w-[80%] w-full">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          </motion.div>
          {/* product info */}
          <motion.div
            initial={{ x: "20%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
            }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <h1 className="font-semibold text-font2 text-xl md:text-2xl lg:text-4xl mb-4">
                {product_data.brand}
              </h1>
              <p className="text-font2 text-lg md:text-xl lg:text-2xl font-medium mb-2">
                {currency}
                {product_data.price}
              </p>
              <p className="text-font2 italic text-sm md:text-base mt-4">
                {product_data.fabric}
              </p>
              <p className="text-font text-sm md:text-base font-light md:w-4/5">
                {product_data.detail}
              </p>
            </div>
            <div className="">
              <div className="flex flex-col gap-2 my-8">
                <p className="text-font2">Select size</p>
                <div className="flex gap-2">
                  {product_data.size.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => set_size(item)}
                      className={`${
                        item === size
                          ? "bg-primary text-bg"
                          : "bg-zinc-50 text-font2"
                      } uppercase border border-zinc-200 text-sm md:text-base rounded-md w-10 h-10 active:scale-110 hover:scale-110 transition-all duration-150`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => addToCart(product_data.id, size)}
                className="bg-font2 hover:bg-black transition-all duration-150 ease-out text-white px-8 py-3 text-sm uppercase active:bg-gray-700 mb-3"
              >
                add to cart
              </button>
              <hr className="w-full border-zinc-100 " />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: "20%", opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.8, duration: 0.6, ease: "easeIn" },
        }}
      >
        <RelatedProducts size={product_data.size} />
      </motion.div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
