import React from "react";
import { NavLink } from "react-router-dom";
import { createSlug } from "../ultils/helper";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { _categories } = useSelector((state) => {
    //console.log(state)
    return state.app;
  });

  return (
    <div className="flex flex-col border">
      {_categories?.map((e) => (
        <NavLink
          key={createSlug(e.title)}
          to={createSlug(e.title)}
          className={({ isActive }) =>
            isActive
              ? "bg-main text-white text-sm px-5 pt-[15px] pb-[14px] hover:text-main"
              : "text-sm px-5 pt-[15px] pb-[14px] hover:text-main"
          }
        >
          {e.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
