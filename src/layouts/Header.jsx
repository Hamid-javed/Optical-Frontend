import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../pages/SearchBar";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-around h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={() => handleNavigation("/")}
              className="text-lg md:text-2xl font-bold tracking-wide"
            >
              CLEARVISION.pk
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <Link
              onClick={() => handleNavigation("/")}
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <div className="relative dropdown dropdown-hover">
              <button className="flex items-center bg-white font-semibold">
                Categories
                <svg
                  className="ml-2 h-4 w-4"
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
              <ul
                tabIndex={0}
                className="dropdown-content menu z-[1] w-28 p-2 bg-white shadow-2xl cursor-default"
              >
                <Link to="/category/Men" className="my-1 font-medium">
                  Men
                </Link>
                <Link to="/category/Women" className="my-1 font-medium">
                  Women
                </Link>
                <Link to="/category/Children" className="my-1 font-medium">
                  Children
                </Link>
                <Link to="/category/Sunglasses" className="my-1 font-medium">
                  Sunglasses
                </Link>
              </ul>
            </div>
            <Link
              to="/find-us"
              onClick={() => handleNavigation("/find-us")}
              className="text-base font-medium text-gray-700 hover:text-gray-900"
            >
              Find Us
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex flex-1 justify-center mx-4">
            <SearchBar />
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

      {/* Mobile Navigation Menu */}
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
