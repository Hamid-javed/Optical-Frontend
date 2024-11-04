import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  const categories = ["Men", "Women", "Children", "Sunglasses"];
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:justify-around">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="md:text-2xl font-bold tracking-wide">
              CLEARVISION.pk
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 ml-10">
            <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            {/* <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Featured
            </Link> */}

            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-base font-medium text-gray-700 hover:text-gray-900 flex items-center"
              >
                {selectedCategory}{" "}
                <svg
                  className={`ml-2 h-4 w-4 transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul>
                    {categories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategorySelect(category)}
                        className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 cursor-pointer"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/find-us"
              className="text-base font-medium text-gray-700 hover:text-gray-900"
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
            <FaHeart
              onClick={() => navigate("/wishlist")}
              className="h-5 w-5 cursor-pointer text-gray-700 hover:text-gray-900"
            />
            <FaShoppingCart className="h-5 w-5 cursor-pointer text-gray-700 hover:text-gray-900" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={() => setIsMenu((prev) => !prev)}
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

      {/* Mobile Search and Links with Transition */}
      <div
        className={`${
          isMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-500 ease-in-out overflow-hidden md:hidden px-4`}
      >
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
            Children
          </Link>
          <Link
            to="/"
            className="block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Sunglasses
          </Link>
          <Link
            to="/find-us"
            className="block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Find Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
