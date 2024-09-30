import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "../components/General/DropDown";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [scategorie, setcategorie] = useState("");
  const options = [
    { categorie: "Men"},
    { categorie: "Women"},
    { categorie: "Childern"},
  ];

console.log(scategorie)

  return (
    <nav className="bg-white shadow-md sticky">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:justify-around">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-wide">
              ClearVision
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 ml-10">
            {" "}
            {/* Added `ml-10` for more space */}
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <div className="flex justify-center items-center cursor-pointer gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              {/* Categories
              <IoIosArrowDown />
              <DropDown/> */}
              <div className="flex justify-content-center ">
                <Dropdown
                  value={scategorie}
                  onChange={(e) => setcategorie(e.value)}
                  options={options}
                  optionLabel="categorie"
                  placeholder="Categories"
                  className="w-full bg-white md:w-14rem text-right"
                />
              </div>
            </div>
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Find Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 mx-6 max-w-[460px]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full bg-gray-100 text-sm border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-gray-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <FaShoppingCart className="h-5 w-5 cursor-pointer text-gray-700 hover:text-gray-900" />
            {/* <FaUser className="h-5 w-5 cursor-pointer text-gray-700 hover:text-gray-900" /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenu((prev) => !prev)}
              // Add logic for opening mobile menu if needed
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search and Links */}
      {isMenu && (
        <div className="md:hidden px-4 pt-4 pb-2">
          <div className="space-y-2 flex flex-col justify-center items-center">
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Men
            </Link>
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Women
            </Link>
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Child
            </Link>
            <Link
              to="/"
              className="block text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Find Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
