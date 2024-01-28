import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

export default function Header() {
  return (
    <header id="Header">
      <div className="flex justify-between items-center p-[20px] shadow-md ">
        <div className="flex items-center">
          <NavLink className="text-[#818EEA] font-semibold" to={"/"}>
            BookShop
          </NavLink>
          <nav className="flex gap-4 ml-8">
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"/recent"}>Recent</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/aboutUs"}>AboutUs</NavLink>
          </nav>
        </div>
        <div className="flex gap-4 ">
          <IoSearchOutline />
          <BiShoppingBag />
        </div>
      </div>
    </header>
  );
}
