import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/PorductCard";
const BASE_URL = import.meta.env.VITE_LOCAL_URL;

const WishlistPage = () => {
  const [removeWish, setRemoveWish] = useState(false);

  const [response, setResponse] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
    const fetchData = async () => {
      const { data, status } = await axios.get(`${BASE_URL}products/wishlist`, {
        withCredentials: true,
      });
      if (status === 200) {
        setResponse(data);
      }
    };
    fetchData();
  }, [removeWish]);

  return (
    <div className="min-w-full min-h-full ">
      {response?.items?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-12 py-6">
          {response?.items.map((product) => (
            <ProductCard
              setRemoveWish={setRemoveWish}
              card={"wishlist"}
              key={product._id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className=" min-w-screen min-h-[80vh] flex justify-center items-center">
          <p className="text-gray-500 text-lg">
            No products available at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
