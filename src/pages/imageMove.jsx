import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  // Array of images to be displayed
  const images = [
    "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2",
    "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Image+3",
    "https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Image+4"
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the image after a fixed interval (e.g., 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval when the component is unmounted
  }, [images.length]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Image container with smooth transitions */}
      <div className="relative w-96 max-w-3xl overflow-hidden h-96 rounded-lg shadow-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
