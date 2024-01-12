import React from "react";
import { formatMoney } from "../ultils/helper";

const Product = ({ productData, isNew }) => {
  return (
    <div className="w-full text-base px-[10px]">
      <div className="w-full border p-[15px] flex flex-col items-center">
        <div className="w-full relative">
          <img
            src={
              productData?.thumb ||
              "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704788874/samples/ecommerce/tc8k8ray3sdnfspldmji.png"
            }
            alt=""
            className="w-[243px] h-[243px] object-cover"
          />
          <img
            src={
              isNew
                ? "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704793115/samples/ecommerce/oultajtqdkkgk3tbxezj.png"
                : "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704793355/samples/ecommerce/wqhr032xf0zmarb7l7r6.png"
            }
            alt=""
            className="absolute top-0 left-0 w-[90px] h-[30px] top-[-12px] left-[130px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mt-[15px] items-start w-full">
          <span className="line-clamp-1">{productData?.title}</span>
          <span className="text-main">
            {formatMoney(productData?.price)} &#8363;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
