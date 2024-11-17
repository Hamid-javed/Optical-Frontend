import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSugestions, setIsSugestions] = useState(false);

  const navigate = useNavigate();

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/products/search?suggestions=true&query=${query}`,
        {
          withCredentials: true,
        }
      );
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
    setIsSugestions(true);
  };

  const handleSuggestionClick = (id) => {
    localStorage.setItem("productId", id);
    navigate(`/product-details/${id}?t=${new Date().getTime()}`);
    setIsSugestions(false);
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-[450px] mx-4">
      <div className="flex flex-1">
        <input
          value={query}
          onChange={handleInputChange}
          type="text"
          placeholder="Search for products..."
          className="bg-gray-100 text-sm border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-gray-500 w-full"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineSearch className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {isSugestions && suggestions.length > 0 && (
        <ul className="absolute bg-white border mt-1 w-full rounded-lg shadow-sm">
          {suggestions.map((product, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(product._id)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
