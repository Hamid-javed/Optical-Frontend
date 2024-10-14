import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Slider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Check if images array is empty
  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="relative md:w-[50%] w-full h-80 overflow-hidden mt-4">
      {/* Images */}
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full h-80 flex-shrink-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Prev & Next Buttons */}
      <IoIosArrowBack
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black text-4xl cursor-pointer"
      />
      <IoIosArrowForward
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-black text-4xl cursor-pointer"
      />

      {/* Dots (Indicators) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-black"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
