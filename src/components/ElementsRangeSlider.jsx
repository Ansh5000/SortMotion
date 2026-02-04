import { useRef, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
const ElementsRangeSlider = ({ isRunning }) => {
  const [range, setRange] = useState([10, 60]);
  return (
    <div className="flex flex-col gap-3 w-2/5">
      <div className="flex items-center justify-between text-sm font-semibold text-gray-500 mx-1">
        <p>{range[0]}</p>
        <p>{range[1]}</p>
      </div>
      <RangeSlider
        min={10}
        max={250}
        disabled={isRunning}
        value={range}
        onInput={setRange}
      />
    </div>
  );
};

export default ElementsRangeSlider;
