import React, { useEffect, useState, memo } from "react";
import icons from "../ultils/icons";
import { apigetProducts } from "../apis/product";
import { formatMoney, renderStarFromNumber } from "../ultils/helper";
import { Countdown } from "./";

let idInterval
const { FaStar, IoMenu } = icons;
const DealDaily = () => {
  //Lưu giá trị của dealDaily
  const [dealDaily, setDealDaily] = useState(null);

  //Lưu giá trị giờ, phút, giây còn lại của deal
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [expireTime, setExpireTime] = useState(false);

  const fetchDealDaily = async () => {
    const response = await apigetProducts({
      limit: 1,
      page: Math.round(Math.random() * 15),
      totalRatings: 5,
    });
    // console.log(response);
    if (response.success) setDealDaily(response.products[0]);
    setHour(23);
    setMinute(59);
    setSecond(59);
  };

  //Lấy dữ liệu từ apiGetProducts qua fetchDealDaily
  //   useEffect(() => {
  //     fetchDealDaily();
  //   }, []);

  useEffect(() => {
    idInterval && clearInterval(idInterval)
    fetchDealDaily();
  }, [expireTime]);

  useEffect(() => {
    idInterval = setInterval(() => {
      if (second > 0) setSecond((prev) => prev - 1);
      else {
        if (minute > 0) {
          setMinute((prev) => prev - 1);
          setSecond(59);
        } else {
          if (hour > 0) {
            setHour((prev) => prev - 1);
            setMinute(59);
            setSecond(59);
          } else {
            setExpireTime(!expireTime);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(idInterval);
    };
  }, [second, minute, hour, expireTime]);

  return (
    <div className="w-full border flex-auto">
      <div className="flex items-center justify-between p-4 w-full">
        <span className="flex-1 flex justify-center">
          <FaStar color="red" size={20} />
        </span>
        <span className="flex-8 font-semibold text-[20px] flex justify-center">
          DAILY DEAL
        </span>
        <span className="flex-1"></span>
      </div>
      <div className="w-full flex items-center flex-col pt-8 px-4 gap-2">
        <img
          src={
            dealDaily?.thumb ||
            "https://res.cloudinary.com/dmu5sii2t/image/upload/v1704788874/samples/ecommerce/tc8k8ray3sdnfspldmji.png"
          }
          alt=""
          className="w-full object-contain"
        />
        <span className="line-clamp-1 text-center">{dealDaily?.title}</span>
        <span className="flex h-4">
          {renderStarFromNumber(dealDaily?.totalRatings)}
        </span>
        <span className="text-main">
          {(dealDaily && formatMoney(dealDaily?.price)) || 0} &#8363;
        </span>
      </div>
      <div className="px-4 mt-4">
        <div className="flex justify-center gap-2 items-center">
          <Countdown unit={"Hours"} number={hour} />
          <Countdown unit={"Minutes"} number={minute} />
          <Countdown unit={"Seconds"} number={second} />
        </div>
        <button
          type="button"
          className="py-2 flex gap-2 items-center justify-center w-full bg-main hover:bg-gray-800 text-white font-medium"
        >
          <IoMenu />
          <span>Options</span>
        </button>
      </div>
    </div>
  );
};

//memo để hạn chế render, chỉ render khi prop thay đổi
export default memo(DealDaily);
