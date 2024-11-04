// import React from "react";
// import ImageMove from "../components/imageMove";

// const IntroPage = () => {
//   const images = [
//     "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
//     "https://via.placeholder.com/1200x600/FF0000/FFFFFF?text=Image+1",
//     "https://pixlr.com/images/index/ai-image-generator-one.webp",
//     "https://via.placeholder.com/1200x600/00FF00/FFFFFF?text=Image+2",
//   ];

//   return (
//     <div className="w-full px-12 my-14 flex justify-between items-center">
//       <div className="flex flex-col gap-6">
//         <h1 className="text-4xl font-extrabold">
//           FIND CLOTHES THAT <br /> MATCHES YOUR STYLE
//         </h1>
//         <p className=" w-96">
//           Browse through our diverse range of meticulously crafted garments,
//           designed to bring out your individuality and cater to your sense of
//           style.
//         </p>
//         <button
//           className="px-3 py-2 text-white bg-black rounded-lg w-32
//                active:bg-white active:text-black
//                hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
//           aria-label="Show Now"
//         >
//           Show Now
//         </button>
//       </div>
//       <ImageMove images={images} />
//     </div>
//   );
// };

// export default IntroPage;

import React from "react";
import ImageMove from "../components/imageMove";

const IntroPage = () => {
  const images = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://via.placeholder.com/1200x600/FF0000/FFFFFF?text=Image+1",
    "https://pixlr.com/images/index/ai-image-generator-one.webp",
    "https://via.placeholder.com/1200x600/00FF00/FFFFFF?text=Image+2",
  ];

  return (
    <div
      id="mainpage"
      className="w-full px-6 md:px-12 my-14 gap-4 flex flex-col md:flex-row justify-between items-center"
    >
      {/* Text Section */}
      <div className="flex flex-col gap-6 md:gap-8 max-w-lg">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Find Glasses That <br /> Matches Your Style
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Explore our extensive collection of meticulously crafted eyewear,
          designed to enhance your individuality and complement your unique
          sense of style.
        </p>
        <button
          className="px-4 py-2 mt-4 w-32 text-white bg-black rounded-lg shadow-md transition-all transform hover:scale-105 active:bg-white active:text-black"
          aria-label="Shop Now"
        >
          Shop Now
        </button>
      </div>

      {/* Image Move Section */}
      <div className="mt-10 md:mt-0 w-full md:w-1/2 flex justify-center items-center">
        <ImageMove images={images} />
      </div>
    </div>
  );
};

export default IntroPage;
