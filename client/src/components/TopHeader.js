import React, { memo } from "react";
import { Link } from "react-router-dom";
import path from "../ultils/path";

const TopHeader = () => {
  return (
    <div className="h-[38px] w-full bg-main flex items-center justify-center">
      <div className="w-main flex items-center justify-between text-xs text-white">
        <span>ORDER ONLINE OR CALL US (+84) 123456789</span>
        <Link className=" hover:text-gray-700" to={`/${path.LOGIN}`}>Sign in or Create Account</Link>
      </div>
    </div>
  );
};

export default memo(TopHeader);
