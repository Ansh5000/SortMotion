import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import randomArrayGenerator from "../utils/randomArrayGenerator";
const ElementsRangeSlider = ({ isRunning, array, setArray }) => {
  const [range, setRange] = useState([20, 80]);
  return (
    <div className="flex flex-col gap-3 w-2/5">
      <div className="flex items-center justify-between text-sm font-semibold text-gray-500 mx-1">
        <p>{range[0]}</p>
        <p>{range[1]}</p>
      </div>
      <RangeSlider
        min={20}
        max={120}
        disabled={isRunning}
        value={range}
        onInput={(values) => {
          setRange(values);
        }}
        onThumbDragEnd={() => {
          randomArrayGenerator(array, setArray, range[0], range[1]);
        }}
      />
    </div>
  );
};

export default ElementsRangeSlider;
