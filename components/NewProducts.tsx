import { ShopContext } from "@/context/ShopContext";
import React, { FC, useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";

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

const NewProducts: FC = () => {
  const { products } = useContext(ShopContext);
  const [newProducts, setNewProducts] = useState<Products[]>([]);

  useEffect(() => {
    setNewProducts(products.slice(0, 5));
  }, []);

  return (
    <div className="my-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-4">
        {newProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            brand={item.brand}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
