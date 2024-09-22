"use client";
import { ShopContext } from "@/context/ShopContext";
import { useContext, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import ProductItem from "@/components/ProductItem";
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

export default function Products() {
  const { products, search, show_search } = useContext(ShopContext);
  const [show_filter, set_show_filter] = useState<boolean>(false);
  const [filter_products, set_filter_products] = useState<Products[]>([]);
  const [size, set_size] = useState<string[]>([]);
  const [sort_type, set_sort_type] = useState("all");

  const toggleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (size.includes(e.target.value)) {
      set_size((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      set_size((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let product = products.slice();
    if (show_search && search) {
      product = product.filter(item => item.brand.toLowerCase().includes(search.toLowerCase()))
    }
    if (size.length > 0) {
      product = product.filter(
        (item) => item.size.some((item) => size.includes(item)) // Check if the product has any of the selected sizes
      );
    }
    set_filter_products(product);
  };

  const sortProducts = () => {
    let sort_products = filter_products.slice();
    switch (sort_type) {
      case "low-high":
        set_filter_products(sort_products.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        set_filter_products(sort_products.sort((a, b) => b.price - a.price));
        break;

      case "a-z":
        set_filter_products(
          sort_products.sort((a, b) => a.brand.localeCompare(b.brand))
        );
        break;

      case "z-a":
        set_filter_products(
          sort_products.sort((a, b) => b.brand.localeCompare(a.brand))
        );
        break;

      default:
        sort_products = products;
        set_filter_products(products)
        break;
    }
    set_filter_products(sort_products);
  };

  useEffect(() => {
    sortProducts();
  }, [sort_type]);

  useEffect(() => {
    applyFilter();
  }, [size, search, show_search]);

  useEffect(() => {
    set_filter_products(products);
  }, []);

  const icon = <MdOutlineSort />;

  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-14 xl:px-20 py-10">
      <div className="w-full flex flex-col xl:flex-row gap-4">
        {/* filter option */}
        <motion.div
          initial={{ x: "-20%", opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.6, duration: 0.6, ease: "easeIn" },
          }}
          className="min-w-48 mb-4"
        >
          <div
            onClick={() => set_show_filter(!show_filter)}
            className="flex items-center uppercase text-font2 text-base mb-1 gap-1.5 cursor-pointer"
          >
            filters
            <IoIosArrowForward
              className={`h-5 xl:hidden ${show_filter ? "rotate-90" : ""}`}
            />
          </div>
          {/* size filters */}
          <div
            className={`border border-zinc-100 rounded-lg p-4 shadow-sm ${
              show_filter ? "" : "hidden"
            } xl:block`}
          >
            <p className="uppercase text-font text-base font-medium mb-2">
              size
            </p>
            <div className="flex flex-col text-sm text-light text-font gap-2">
              <div className="flex gap-2">
                <input
                  id="s"
                  type="checkbox"
                  value={"s"}
                  onChange={toggleSize}
                />
                <label
                  htmlFor="s"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  S
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  id="m"
                  type="checkbox"
                  value={"m"}
                  onChange={toggleSize}
                />
                <label
                  htmlFor="m"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  M
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  id="l"
                  type="checkbox"
                  value={"l"}
                  onChange={toggleSize}
                />
                <label
                  htmlFor="l"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  L
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  id="xl"
                  type="checkbox"
                  value={"xl"}
                  onChange={toggleSize}
                />
                <label
                  htmlFor="xl"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  XL
                </label>
              </div>
            </div>
          </div>
        </motion.div>
        {/* products */}
        <motion.div
          initial={{ y: "20%", opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.6, duration: 1, ease: "easeOut" },
          }}
          className="flex-1"
        >
          <div className="flex justify-between mb-4">
            <h1 className="text-font2 uppercase font-semibold text-lg lg:text-2xl">
              All Products
            </h1>
            <Select
              onValueChange={(value) => set_sort_type(value)}
              defaultValue="all"
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder={icon} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="low-high">Low to High</SelectItem>
                <SelectItem value="high-low">High to Low</SelectItem>
                <SelectItem value="a-z">A - Z</SelectItem>
                <SelectItem value="z-a">Z - A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-4">
            {filter_products.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                brand={item.brand}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
