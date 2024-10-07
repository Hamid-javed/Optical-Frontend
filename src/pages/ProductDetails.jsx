import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/webHandler";
import { URLS } from "../data/URL";
import Slider from "../components/Slider";
import { FaStar } from "react-icons/fa";
import Review from "../components/Review";

const ProductDetails = () => {
  const [response, setResponse] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  let productId = "670126900cbe0f95f6b16f65";

  console.log(selectedColor);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { response, status } = await WebHandler(
        `${URLS.PRODUCTDETAILS}${productId}`,
        "GET"
      );
      if (status === 200) {
        setResponse(response);
        console.log(response);
      } else {
        console.log(response);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-600"}
        />
      );
    }
    return stars;
  };

  // Ensure we don't render until response is fetched
  if (!response) return <div>Loading...</div>;

  return (
    <div className="product-details container mx-auto px-12 py-8">
      {/* Product Images Slider */}
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center mb-8">
        <Slider images={response.images} />
        {/* Product Details */}
        <div className="w-full flex flex-col items-center md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{response.name}</h1>
          <p className="text-lg mb-4">{response.description}</p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-1">{renderStars(response.rating)}</div>
            <span className="ml-2 text-gray-700">
              ({response.reviewCount} reviews)
            </span>
          </div>

          {/* Category */}
          <div className="mb-4">
            <span className="font-semibold text-gray-700">Category:</span>{" "}
            {response.category}
          </div>

          {/* Colors */}
          <div className="mb-4">
            <span className="font-semibold text-gray-700">
              Available Colors:
            </span>
            <div className="flex space-x-2 mt-2">
              {response.colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`cursor-pointer px-2 py-1 border rounded ${
                    selectedColor === color
                      ? "bg-black text-white"
                      : "border-gray-300 hover:bg-gray-200"
                  }`}
                >
                  {color}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Color Display */}
          {selectedColor && (
            <div className="mb-4">
              <span className="font-semibold text-gray-700">
                Selected Color:
              </span>{" "}
              {selectedColor}
            </div>
          )}

          {/* Size */}
          <div className="mb-4">
            <span className="font-semibold text-gray-700">Size:</span>{" "}
            {response.size}
          </div>

          {/* Price and Stock */}
          <div className="flex flex-col gap-3 justify-center mb-4">
            <span className="text-2xl font-semibold text-green-600">
              Rs: {response.price.toFixed(2)}
            </span>
            <button className="bg-black w-48 text-white  font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform active:scale-95 group">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <Review reviews={response.reviews} />
    </div>
  );
};

export default ProductDetails;
