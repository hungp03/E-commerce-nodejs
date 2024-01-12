import React, { useEffect, useState } from "react";
import { apigetProducts } from "../apis/product";
import { Product } from "./";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const tabs = [
  {
    id: 1,
    name: "best sellers",
  },
  {
    id: 2,
    name: "new arrivals",
  },
  // {
  //   id: 3,
  //   name: "tablet",
  // },
];

const BestSeller = () => {
  const [bestSellers, setBestSeller] = useState(null);
  const [newProducts, setnewProducts] = useState(null);
  const [activedTab, setActivedTab] = useState(1);
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    //https://topdev.vn/blog/xu-ly-bat-dong-bo-voi-promise-all-trong-javascript/
    const response = await Promise.all([
      apigetProducts({ sort: "-sold" }),
      apigetProducts({ sort: "-createdAt" }),
    ]);
    //console.log(response);
    if (response[0]?.success) {
      setBestSeller(response[0].products);
      setProducts(response[0].products);
    }

    if (response[1]?.success) setnewProducts(response[1].products);

    setProducts(response[0].products);
  };

  //truyền tham số thứ 2 của useEffect() là 1 hàm rỗng [] để chỉ gọi 1 lần khi render component
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (activedTab === 1) {
      setProducts(bestSellers);
    } else if (activedTab === 2) {
      setProducts(newProducts);
    }
  }, [activedTab, bestSellers, newProducts]);

  return (
    <div>
      <div className="flex text-[20px] gap-8 pb-2 border-b-4 border-main">
        {tabs.map((e) => (
          <span
            key={e.id}
            className={`font-semibold capitalize cursor-pointer ${
              activedTab === e.id ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActivedTab(e.id)}
          >
            {e.name}
          </span>
        ))}
      </div>
      <div className="mt-4 mx-[-10px]">
        <Slider {...settings}>
          {products?.map((e) => (
            <Product
              key={e.id}
              productData={e}
              isNew={activedTab === 1 ? false : true}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSeller;
