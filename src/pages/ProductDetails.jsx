import React, { useEffect, useState } from "react";
import { WebHandler } from "../data/webHandler";
import { URLS } from "../data/URL";
import Slider from "../components/Slider";
import { FaStar } from "react-icons/fa";
import Review from "../components/Review";
import Loader from "../components/General/Loader";
import SelectLense from "../components/SelectLense";

const ProductDetails = () => {
  const [response, setResponse] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [colorError, setColorError] = useState(false); // To track if the user tried adding without selecting a color

  const productId = localStorage.getItem("productId");

  useEffect(() => {
    const fetchProductDetails = async () => {
      const { response, status } = await WebHandler(
        `${URLS.PRODUCTDETAILS}${productId}`,
        "GET"
      );
      if (status === 200) {
        setResponse(response);
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

  const handleAddToCart = () => {
    if (!selectedColor) {
      setColorError(true); // Show error if no color is selected
      return;
    }
    // Add to cart logic goes here
    console.log(`Adding product with color: ${selectedColor} to cart`);
  };

  // Ensure we don't render until response is fetched
  if (!response)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="product-details container mx-auto px-12 py-8">
      {/* Product Images Slider */}
      <div className="flex flex-col md:flex-row gap-10 justify-center mb-8">
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
                  onClick={() => {
                    setSelectedColor(color);
                    setColorError(false); // Reset error when a color is selected
                  }}
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

          {/* Show error if no color selected */}
          {colorError && (
            <p className="text-red-500 mb-4">Please select a color.</p>
          )}

          {/* Size */}
          <div className="mb-4">
            <span className="font-semibold text-gray-700">Size:</span>{" "}
            {response.size}
          </div>

          <div className="">
            <div className="flex justify-center mb-3 gap-2">
              <p className="font-semibold">Select Lense: </p>
              <p className="text-red-500">Free*</p>
            </div>
            <div className="">
              <SelectLense />
            </div>
          </div>

          {/* Price and Stock */}
          <div className="flex flex-col gap-3 justify-center mb-4">
            <span className="text-2xl font-semibold text-green-600">
              Rs: {response.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className={
                "w-48 py-2 px-4 rounded font-bold transition duration-200 ease-in-out transform active:scale-95 bg-black text-white"
              }
            >
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
