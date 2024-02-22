import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../apis/product";
import { CustomSlider } from "./";
import { getNewProducts } from "../store/products/asyncActions";
import { useDispatch, useSelector } from "react-redux";

const tabs = [
  {
    id: 1,
    name: "best sellers",
  },
  {
    id: 2,
    name: "new arrivals",
  },
];

const BestSeller = () => {

  const [bestSellers, setBestSeller] = useState(null);
  const [activedTab, setActivedTab] = useState(1);
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const { newProducts } = useSelector((state) => state.products);

  const fetchProducts = async () => {
    //https://topdev.vn/blog/xu-ly-bat-dong-bo-voi-promise-all-trong-javascript/
    const response = await apiGetProducts({ sort: "-sold" });
    if (response?.success) {
      setBestSeller(response.products);
      setProducts(response.products);
    }
  };

  //truyền tham số thứ 2 của useEffect() là 1 hàm rỗng [] để chỉ gọi 1 lần khi render component
  useEffect(() => {
    fetchProducts();
    dispatch(getNewProducts());
  }, [dispatch]);

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
            className={`font-semibold uppercase cursor-pointer ${
              activedTab === e.id ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setActivedTab(e.id)}
          >
            {e.name}
          </span>
        ))}
      </div>

      <div className="mt-4 mx-[-10px] ">
        <CustomSlider products={products} activedTab={activedTab} />
      </div>

      <div className="flex gap-4 mt-4">
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner2-home2_2000x_crop_center.png?v=1613166657"
          alt="banner1"
          className="flex-1 object-contain"
        />
        <img
          src="https://digital-world-2.myshopify.com/cdn/shop/files/banner1-home2_2000x_crop_center.png?v=1613166657"
          alt="banner2"
          className="flex-1 object-contain"
        />
      </div>
      
    </div>
  );
};

export default BestSeller;
