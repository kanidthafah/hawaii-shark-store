"use client";
import React, { createContext, ReactNode, useState } from "react";
import { products } from "@/assests/assets";
import { toast } from "react-toastify";

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

interface ShopContextProviderProps {
  children: ReactNode;
}

interface ShopContextType {
  products: Products[];
  currency: string;
  delivery_fee: number;
  search: string;
  set_search: React.Dispatch<React.SetStateAction<string>>;
  show_search: boolean;
  set_show_search: React.Dispatch<React.SetStateAction<boolean>>;
  cart_items: CartItems;
  addToCart: (itemId: number, size: string) => void;
  get_cart_count: () => number;
  update_quantity: (itemId: number, size: string, quantity: number) => void;
  get_cart_amount: () => number;
}

const defaultContextValue: ShopContextType = {
  products: [],
  currency: "฿",
  delivery_fee: 0,
  search: "", // initial value for search state
  set_search: () => {}, // placeholder function for set_search
  show_search: true, // initial value for show_search
  set_show_search: () => {}, // placeholder function for set_show_search
  cart_items: {}, // Initial cart is empty
  addToCart: () => {},
  get_cart_count: () => 0,
  update_quantity: () => {},
  get_cart_amount: () => 0,
};

interface CartItems {
  [itemId: number]: {
    [size: string]: number; // size is a string and maps to the quantity
  };
}

export const ShopContext = createContext<ShopContextType>(defaultContextValue);

const ShopContextProvider = (props: ShopContextProviderProps) => {
  const currency: string = "฿";
  const delivery_fee: number = 0;
  const [search, set_search] = useState<string>("");
  const [show_search, set_show_search] = useState<boolean>(false);
  const [cart_items, set_cart_items] = useState<CartItems>({});

  const addToCart = async (itemId: number, size: string) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cart_data = structuredClone(cart_items);
    if (cart_data[itemId]) {
      if (cart_data[itemId][size]) {
        cart_data[itemId][size] += 1;
      } else {
        cart_data[itemId][size] = 1;
      }
    } else {
      cart_data[itemId] = {};
      cart_data[itemId][size] = 1;
    }
    set_cart_items(cart_data);
  };

  const get_cart_count = () => {
    let total_count = 0;
    for (const items in cart_items) {
      for (const item in cart_items[items]) {
        try {
          if (cart_items[items][item] > 0) {
            total_count += cart_items[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return total_count;
  };

  const update_quantity = async (
    itemId: number,
    size: string,
    quantity: number
  ) => {
    let cart_data = structuredClone(cart_items);
    cart_data[itemId][size] = quantity;

    set_cart_items(cart_data);
  };

  const get_cart_amount = () => {
    let totalAmount = 0;
    for (const items in cart_items) {
      let item_info = products.find(
        (products) => products.id === Number(items)
      );
      for (const item in cart_items[items]) {
        try {
          if (cart_items[items][item] > 0) {
            totalAmount += Number(item_info?.price) * cart_items[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    set_search,
    show_search,
    set_show_search,
    cart_items,
    addToCart,
    get_cart_count,
    update_quantity,
    get_cart_amount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
