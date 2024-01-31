import React, { useState, useEffect } from "react";
import { ProductCard } from "./";
import { apiGetProducts } from "../apis";

const FeatureProduct = () => {
  const [products, setProducts] = useState(null);

  const fetchProduct = async () => {
    const response = await apiGetProducts({ limit: 9, totalRatings: 5 });
    if (response.success) {
      setProducts(response.products);
    }
    //console.log(response);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-[20px] uppercase font-semibold py-[10px] border-b-4 border-main">
        Feature Product
      </h2>
      <div className="flex flex-wrap mt-4 mx-[-10px]">
        {products?.map((e) => (
          <ProductCard
            key={e._id}
            image={e.thumb}
            title={e.title}
            totalRatings={e.totalRatings}
            price={e.price}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661"
          alt=""
          className="w-[50%] object-contain"
        />
        <div className="flex flex-col justify-between w-[24%] ">
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661"
            alt=""
          />
          <img
            src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661"
            alt=""
          />
        </div>
        <img
          className="w-[24%] object-contain"
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeatureProduct;
