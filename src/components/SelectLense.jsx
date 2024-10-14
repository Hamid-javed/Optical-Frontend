// import React, { useState } from "react";
// import Transition from "../assets/images/transition.jpg";
// import Screen from "../assets/images/screenprotection.jpg";
// import ScreenAndTransition from "../assets/images/transitionscreen.jpg";

// const lensesData = [
//   {
//     id: "digitalScreenLense",
//     price: "1000",
//     image: Screen,
//     label: "Screen Protection",
//   },
//   {
//     id: "transitionLense",
//     price: "1200",
//     image: Transition,
//     label: "Transition Lens",
//   },
//   {
//     id: "transitionAndDigital",
//     price: "2000",
//     image: ScreenAndTransition,
//     label: "Transition Screen",
//   },
// ];

// const LensOption = ({ lens, isSelected, onSelect, onSelectPrice }) => (
//   <div
//     className="w-32 md:w-42 text-center cursor-pointer flex flex-col items-center"
//     onClick={() => {
//       onSelect(lens.id);
//       onSelectPrice(lens.price);
//       setLabel(lens.label);
//     }}
//   >
//     <p>+Rs: {lens.price}</p>
//     <img
//       className={`cursor-pointer rounded-lg transition-transform duration-300 ${
//         isSelected
//           ? "border-2 border-black font-bold transform scale-105"
//           : "transform scale-100"
//       }`}
//       src={lens.image}
//       alt={lens.label}
//     />
//     <p className={`mt-2 ${isSelected ? "font-bold" : ""}`}>{lens.label}</p>
//   </div>
// );
// console.log(label);

// const SelectLense = ({ selectedLens, setselectedLens, setAddLensPrice }) => {
//   const [label, setLabel] = useState("");
//   return (
//     <>
//       <div className="flex justify-center mb-3 gap-2">
//         <p className="font-semibold">Select Lens: </p>
//         <div className="">{label}</div>
//       </div>
//       <p className="text-red-400 my-3 px-8">
//         *Note: If you want to add a lens you have to pay Rs. 1000 advance as
//         changes of mind are not acceptable!.
//       </p>
//       <div className="flex flex-wrap gap-4 justify-center">
//         {lensesData.map((lens) => (
//           <LensOption
//             key={lens.id}
//             lens={lens}
//             isSelected={selectedLens === lens.id}
//             onSelect={setselectedLens}
//             onSelectPrice={setAddLensPrice}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SelectLense;

import React from "react";
import Transition from "../assets/images/transition.jpg";
import Screen from "../assets/images/screenprotection.jpg";
import ScreenAndTransition from "../assets/images/transitionscreen.jpg";
import { ImCross } from "react-icons/im";

const lensesData = [
  {
    id: "digitalScreenLense",
    price: "1000",
    image: Screen,
    label: "Screen Protection",
  },
  {
    id: "transitionLense",
    price: "1200",
    image: Transition,
    label: "Transition Lens",
  },
  {
    id: "transitionAndDigital",
    price: "2000",
    image: ScreenAndTransition,
    label: "Transition Screen",
  },
];

const LensOption = ({ lens, isSelected, onSelect, onSelectPrice }) => (
  <div
    className="w-32 md:w-48 text-center cursor-pointer flex flex-col items-center"
    onClick={() => {
      onSelect(lens.id);
      onSelectPrice(lens.price);
    }}
  >
    <p>+Rs: {lens.price}</p>
    <img
      className={`cursor-pointer rounded-lg transition-transform duration-300 ${
        isSelected
          ? "border-2 border-black font-bold transform scale-105"
          : "transform scale-100"
      }`}
      src={lens.image}
      alt={lens.label}
    />
    <p className={`mt-2 ${isSelected ? "font-bold" : ""}`}>{lens.label}</p>
  </div>
);

const SelectLense = ({ selectedLens, setselectedLens, setAddLensPrice }) => {
  const selectedLensData = lensesData.find((lens) => lens.id === selectedLens);

  return (
    <>
      <div className="flex justify-center  mb-3 gap-2">
        <p className="font-semibold flex justify-start items-center">
          Selected Lens:{" "}
        </p>
        <div className="border-[2px] border-black px-3 py-1 flex justify-center items-center gap-2">
          {selectedLensData ? selectedLensData.label : "None Selected"}
          {selectedLens === "" ? (
            ""
          ) : (
            <ImCross
              onClick={() => setselectedLens("")}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <p className="text-red-400 my-3 px-8">
        *Note: If you want to add a lens you have to pay Rs. 1000 advance as
        changes of mind are not acceptable!.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {lensesData.map((lens) => (
          <LensOption
            key={lens.id}
            lens={lens}
            isSelected={selectedLens === lens.id}
            onSelect={setselectedLens}
            onSelectPrice={setAddLensPrice}
          />
        ))}
      </div>
    </>
  );
};

export default SelectLense;
