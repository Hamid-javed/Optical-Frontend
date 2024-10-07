import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/webHandler";
import { URLS } from "../data/URL";
import ProductCard from "../components/PorductCard";
import Loader from "../components/General/Loader";

const Featured = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { response, status } = await WebHandler(
        `${URLS.BYCATEGORY}${category}`
      );
      if (status === 200) {
        setProducts(response); // Assuming response is an array of products
        setLoading(false);
      } else {
        setError("Error fetching products");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="px-12 my-12">
      <h1 className="text-3xl font-extrabold text-center">{category}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center text-xl">
            No products available.
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <button className="text-center mt-12 bg-black text-white w-56 px-2 py-2 rounded-md cursor-pointer active:bg-white active:text-black transition duration-200">
          Explore {category} Glasses
        </button>
      </div>
    </div>
  );
};

export default Featured;
