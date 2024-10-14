import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const SelectEyelense = ({
  rightSPH,
  rightCYL,
  rightAxis,
  leftSPH,
  leftCYL,
  leftAxis,
  setRightSPH,
  setRightCYL,
  setRightAxis,
  setLeftSPH,
  setLeftCYL,
  setLeftAxis,
}) => {
  //   console.log(rightSPH);
  const [isSelected, setIsSelected] = useState(false);
  function generateOptions(start = -6, end = 6, step = 0.25) {
    const options = [];
    for (let value = start; value <= end; value += step) {
      const formattedValue =
        value === 0 ? "0" : `${value >= 0 ? "+" : ""}${value.toFixed(2)}`;
      options.push(formattedValue);
    }
    return options;
  }
  function generateAxisOptions(start = 0, end = 180, step = 1) {
    const options = [];
    for (let value = start; value <= end; value += step) {
      const formattedValue = value;
      options.push(formattedValue);
    }
    return options;
  }
  const sphOptions = generateOptions();
  const cylOptions = generateOptions(-2, 2, 0.25);
  const axisOptions = generateAxisOptions();

  return (
    <div className="my-3 w-full">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setIsSelected(false)}
          className={`flex justify-center items-center gap-1 border ${
            isSelected ? "border-transparent" : "border-black"
          } px-2 py-1 ${!isSelected ? "border-2" : ""}`}
        >
          <ImCross />
          Eyesight Lens
        </button>
        <button
          onClick={() => setIsSelected(true)}
          className={`flex justify-center items-center gap-1 border ${
            isSelected ? "border-black" : "border-transparent"
          } px-2 py-1 ${isSelected ? "border-2" : ""}`}
        >
          Eyesight Lens
        </button>
      </div>
      {isSelected && (
        <div className="grid grid-cols-2 gap-4 mt-2">
          {/* Right Eye */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Right</h3>
            <div className="flex flex-col items-center">
              <label className="text-gray-500">SPH</label>
              <select
                className="w-24 p-2 border border-gray-300 rounded-md"
                value={rightSPH}
                onChange={(e) => setRightSPH(e.target.value)}
              >
                {sphOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-500">CYL</label>
              <select
                className="w-24 p-2 border border-gray-300 rounded-md"
                value={rightCYL}
                onChange={(e) => setRightCYL(e.target.value)}
              >
                {cylOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-500">AXIS</label>
              <select
                className="w-24 p-2 border border-gray-300 rounded-md"
                value={rightAxis}
                onChange={(e) => setRightAxis(e.target.value)}
              >
                {axisOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Left Eye */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">Left</h3>
            <div className="flex flex-col items-center">
              <label className="text-gray-500">SPH</label>
              <select
                className="w-24 p-2 border border-gray-300 rounded-md"
                value={leftSPH}
                onChange={(e) => setLeftSPH(e.target.value)}
              >
                {sphOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-500">CYL</label>
              <select
                className="w-24 p-2 border border-gray-300 rounded-md"
                value={leftCYL}
                onChange={(e) => setLeftCYL(e.target.value)}
              >
                {cylOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label className="text-gray-500">AXIS</label>
              <select
                className="w-24 p-2 border border-gray-300 rounded-md"
                value={leftAxis}
                onChange={(e) => setLeftAxis(e.target.value)}
              >
                {axisOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectEyelense;
