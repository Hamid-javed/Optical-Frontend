import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";


export default function ImageSlider() {
  const images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://via.placeholder.com/1200x600/FF0000/FFFFFF?text=Image+1",
    "https://pixlr.com/images/index/ai-image-generator-one.webp",
    "https://via.placeholder.com/1200x600/00FF00/FFFFFF?text=Image+2",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container mx-auto mt-10">
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-96 flex justify-center items-center"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2 mt-6">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            currentIndex === index
              ? 'bg-black shadow-lg scale-125'
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
    </div>
  );
}
