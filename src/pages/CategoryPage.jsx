import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/PorductCard";
const BASE_URL = import.meta.env.VITE_LOCAL_URL;

function CategoryPage() {
  const { category } = useParams();
  const [response, setResponse] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const { data, status } = await axios.get(
        `${BASE_URL}products/category/${category}`,
        {
          withCredentials: true,
        }
      );
      if (status === 200) {
        setResponse(data);
      }
    };
    fetchData();
  }, [category]);
  return (
    <div className="min-h-screen w-full px-12 pb-16">
      <h1 className="text-4xl font-extrabold text-center my-10">{category}</h1>
      <div className="grid grid-cols-3 gap-10">
        {response.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
