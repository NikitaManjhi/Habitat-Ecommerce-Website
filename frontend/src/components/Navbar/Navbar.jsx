import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center z-10  border-red-600 border-2   bg-white shadow-md py-3">
      <img src={logo} alt="" className="w-24 " />
      <ul className="flex gap-4 ">
        <li className="text-blue-600">Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>FAQ</li>
      </ul>

      <div className="flex gap-3 items-center">
        <CiSearch size={25} />
        <CiUser size={25} />
        <CiHeart size={25} />
        <CiShoppingCart size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
