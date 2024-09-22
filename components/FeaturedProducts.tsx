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

const FeaturedProducts: FC = () => {
  const { products } = useContext(ShopContext);
  // console.log(products)
  const [featured, setFeatured] = useState<Products[]>([]);

  useEffect(() => {
    const featuredProducts = products.filter((item) => item.featured);
    setFeatured(featuredProducts.slice(0, 5));
  }, []);
  return (
    <div className="my-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-4">
        {featured.map((item, index) => (
          <ProductItem key={index} id={item.id} image={item.image} brand={item.brand} price={item.price}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
