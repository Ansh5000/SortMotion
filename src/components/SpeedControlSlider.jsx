import { useEffect, useRef } from "react";

const SpeedControlSlider = ({ speed, setSpeed, min, max }) => {
  const sliderRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current || !tooltipRef.current) return;

    const percent = (speed - min) / (max - min);
    const thumbSize = 20;
    const sliderWidth = sliderRef.current.offsetWidth;
    const offset = percent * (sliderWidth - thumbSize) + thumbSize / 2;
    tooltipRef.current.style.left = `${offset}px`;
  }, [speed]);

  return (
    <div className="w-96">
      <div className="flex justify-between text-xs font-semibold text-gray-600">
        <span>{min}ms</span>
        <span>{max}ms</span>
      </div>
      <div className="relative">
        <div
          ref={tooltipRef}
          className="absolute -bottom-5 bg-black text-white px-2 py-1 text-xs font-semibold rounded-lg transform -translate-x-1/2"
        >
          {speed}
        </div>
        <input
          type="range"
          name="speed"
          id="speed"
          min={min}
          max={max}
          ref={sliderRef}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full cursor-pointer accent-red-500"
        />
      </div>
    </div>
  );
};

export default SpeedControlSlider;
