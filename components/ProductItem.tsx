import { ShopContext } from "@/context/ShopContext";
import React, { FC, useContext } from "react";
import Link from "next/link";
interface ProductItemProps {
  id: number;
  image: string[];
  brand: string;
  price: number;
}

const ProductItem: FC<ProductItemProps> = ({ id, image, brand, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      href={`/product/${id}`}
      className="cursor-pointer p-2 border border-font border-opacity-10 shadow-sm rounded-lg"
    >
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={image[0]}
          className="hover:scale-110 duration-150 transition-all ease-out"
        />
      </div>
      <p className="text-secondary uppercase mb-2 text-sm md:text-base">
        {brand}
      </p>

      <p className="text-font font-semibold text-sm md:text-base">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
