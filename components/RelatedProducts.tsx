import { ShopContext } from "@/context/ShopContext";
import React, { FC, useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";

interface RelatedProductsProps {
  size: string[];
}

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

const RelatedProducts: FC<RelatedProductsProps> = ({ size }) => {
  const { products } = useContext(ShopContext);
  const [related, set_related] = useState<Products[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      let related_products = products.slice();
      related_products = related_products.filter((item) =>
        item.size.some((productSize) => size.includes(productSize))
      );

      set_related(related_products.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-start text-xl py-2">
        <h3 className="text-font">Related Products</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-4">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            brand={item.brand}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
