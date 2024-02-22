import React, { useState } from "react";
import { formatMoney, renderStarFromNumber } from "../ultils/helper";
import { SelectOption } from "./";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import path from "../ultils/path";

const { FaEye, IoMenu, FaHeart } = icons;

const Product = ({ productData, isNew }) => {

  const [showOption, setShowOption] = useState(false);

  return (
    <div className="w-full h-auto text-base px-[10px]">
      <Link
        onMouseEnter={(e) => {
          e.stopPropagation();
          setShowOption(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setShowOption(false);
        }}
        to={`/${path.PRODUCT_DETAIL}/${productData?._id}/${productData.title}`}
        className="w-full border p-[15px] flex flex-col items-center">
        
        <div className="w-full relative flex items-center justify-center">
          {showOption && (
            <div className="absolute bottom-[-10px] flex justify-center left-0 right-0 gap-2 animate-slide-top">
              <SelectOption key={productData._id + '1'} icon={<FaEye />} />
              <SelectOption key={productData._id + '2'} icon={<IoMenu />} />
              <SelectOption key={productData._id + '3'} icon={<FaHeart />} />
            </div>
          )}

          <img
            src={
              productData?.thumb ||
              "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704788874/samples/ecommerce/tc8k8ray3sdnfspldmji.png"
            }
            alt=""
            className="w-[275px] h-[275px] object-cover"/>
          
          <img
            src={
              isNew
                ? "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704793115/samples/ecommerce/oultajtqdkkgk3tbxezj.png"
                : "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704793355/samples/ecommerce/wqhr032xf0zmarb7l7r6.png"
            }
            alt=""
            className="absolute w-[70px] h-[24px] top-[-10px] right-[-10px] object-cover"/>
        </div>
        
        <div className="flex flex-col gap-1 mt-[15px] items-start w-full">
          <span className="line-clamp-1">{productData?.title}</span>
          <span className="flex">
            {renderStarFromNumber(productData?.totalRatings)}
          </span>
          <span className="text-main">
            {formatMoney(productData?.price)} &#8363;
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
