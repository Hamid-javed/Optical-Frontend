// import React, { useState } from "react";
// import Transition from "../assets/images/transition.jpg";
// import Screen from "../assets/images/screenprotection.jpg";
// import ScreenAndTransition from "../assets/images/transitionscreen.jpg";

// const SelectLense = () => {
//   const [selectedImage, setSelectedImage] = useState("");

//   // Function to handle image selection
//   const handleSelect = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className="flex gap-2">
//       {/* Transition Lens */}
//       <div
//         className={"w-48 text-center cursor-pointer"}
//         onClick={() => handleSelect("Transition")}
//       >
//         <img
//           className={`cursor-pointer ${
//             selectedImage === "Transition"
//               ? "border-2 border-black font-bold"
//               : ""
//           }`}
//           src={Transition}
//           alt="Transition Lens"
//         />
//         <p
//           className={`mt-2 ${
//             selectedImage === "Transition" ? "font-bold" : ""
//           }`}
//         >
//           Transition Lense
//         </p>
//       </div>

//       {/* Screen Protection */}
//       <div
//         className={"w-48 text-center cursor-pointer"}
//         onClick={() => handleSelect("Screen")}
//       >
//         <img
//           className={`cursor-pointer ${
//             selectedImage === "Screen" ? "border-2 border-black font-bold" : ""
//           }`}
//           src={Screen}
//           alt="Screen Protection"
//         />
//         <p className={`mt-2 ${selectedImage === "Screen" ? "font-bold" : ""}`}>
//           Screen Protection
//         </p>
//       </div>

//       {/* Transition Screen */}
//       <div
//         className={"w-48 text-center cursor-pointer"}
//         onClick={() => handleSelect("ScreenAndTransition")}
//       >
//         <img
//           className={`cursor-pointer ${
//             selectedImage === "ScreenAndTransition"
//               ? "border-2 border-black font-bold"
//               : ""
//           }`}
//           src={ScreenAndTransition}
//           alt="Transition Screen"
//         />
//         <p
//           className={`mt-2 ${
//             selectedImage === "ScreenAndTransition" ? "font-bold" : ""
//           }`}
//         >
//           Transition Screen
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SelectLense;
import React, { useState } from "react";
import Transition from "../assets/images/transition.jpg";
import Screen from "../assets/images/screenprotection.jpg";
import ScreenAndTransition from "../assets/images/transitionscreen.jpg";

const SelectLense = () => {
  const [selectedImage, setSelectedImage] = useState("");

  // Function to handle image selection
  const handleSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {/* Transition Lens */}
      <div
        className="w-32 md:w-42 text-center cursor-pointer flex flex-col items-center"
        onClick={() => handleSelect("transitionLense")}
      >
        <img
          className={`cursor-pointer rounded-lg transition-transform duration-300 ${
            selectedImage === "transitionLense"
              ? "border-2 border-black font-bold transform scale-105"
              : "transform scale-100"
          }`}
          src={Transition}
          alt="Transition Lens"
        />
        <p
          className={`mt-2 ${
            selectedImage === "transitionLense" ? "font-bold" : ""
          }`}
        >
          Transition Lens
        </p>
      </div>

      {/* Screen Protection */}
      <div
        className="w-32 md:w-42 text-center cursor-pointer flex flex-col items-center"
        onClick={() => handleSelect("digitalScreenLense")}
      >
        <img
          className={`cursor-pointer rounded-lg transition-transform duration-300 ${
            selectedImage === "digitalScreenLense"
              ? "border-2 border-black font-bold transform scale-105"
              : "transform scale-100"
          }`}
          src={Screen}
          alt="Screen Protection"
        />
        <p
          className={`mt-2 ${
            selectedImage === "digitalScreenLense" ? "font-bold" : ""
          }`}
        >
          Screen Protection
        </p>
      </div>

      {/* Transition Screen */}
      <div
        className="w-32 md:w-42 text-center cursor-pointer flex flex-col items-center"
        onClick={() => handleSelect("transitionAndDigital")}
      >
        <img
          className={`cursor-pointer rounded-lg transition-transform duration-300 ${
            selectedImage === "transitionAndDigital"
              ? "border-2 border-black font-bold transform scale-105"
              : "transform scale-100"
          }`}
          src={ScreenAndTransition}
          alt="Transition Screen"
        />
        <p
          className={`mt-2 ${
            selectedImage === "transitionAndDigital" ? "font-bold" : ""
          }`}
        >
          Transition Screen
        </p>
      </div>
    </div>
  );
};

export default SelectLense;
