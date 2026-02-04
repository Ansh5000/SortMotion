import { useEffect, useRef, useState } from "react";
import Bar from "./components/Bar";
import bubble_sort from "./algorithms/Bubble_Sort";
import selection_sort from "./algorithms/Selection_Sort";
import insertion_sort from "./algorithms/Insertion_Sort";
import merge_sort from "./algorithms/Merge_Sort";
import Traverser from "./algorithms/Traverser";
import SpeedControlSlider from "./components/SpeedControlSlider";
import AlgoSelect from "./components/AlgoSelect";
import ShuffleButton from "./components/ShuffleButton";
import ElementsRangeSlider from "./components/ElementsRangeSlider";

function App() {
  const [array, setArray] = useState([
    45, 92, 18, 77, 61, 33, 100, 58, 27, 84, 11, 69, 73, 56, 90, 25, 39, 88, 64,
    71, 15, 97, 42, 59, 81, 20, 66, 74, 53, 99, 31, 60, 86, 49, 17, 95, 36, 72,
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [outer, setOuter] = useState(-1);
  const [inner, setInner] = useState(-1);
  const [speed, setSpeed] = useState(50);
  const speedRef = useRef(speed);
  const min = 20;
  const max = 500;

  const [selectedAlgo, setSelectedAlgo] = useState("nothing");

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const handleChange = (e) => {
    setSelectedAlgo(e.target.value);
  };

  const handleClick = async () => {
    if (isRunning) return;
    let tempArray = [...array];
    let n = tempArray.length;
    let started = false;

    switch (selectedAlgo) {
      case "bubble":
        started = true;
        setIsRunning(true);
        await bubble_sort(setOuter, setInner, setArray, tempArray, speedRef, n);
        break;
      case "selection":
        started = true;
        setIsRunning(true);
        await selection_sort(
          setOuter,
          setInner,
          setArray,
          tempArray,
          speedRef,
          n,
        );
        break;
      case "insertion":
        started = true;
        setIsRunning(true);
        await insertion_sort(
          setOuter,
          setInner,
          setArray,
          tempArray,
          speedRef,
          n,
        );
        break;
      case "merge":
        started = true;
        setIsRunning(true);
        await merge_sort(setOuter, setInner, setArray, tempArray, speedRef, n);
        break;
      case "nothing":
        alert("Please select an algorithm");
        return;
      default:
        alert("Please select an algorithm");
        return;
    }
    if (started) {
      setInner(-1);
      await Traverser(setOuter, n);
      setOuter(-1);
    }
    setIsRunning(false);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 h-screen w-[90vw] bg-gray-50 p-4">
        <header className="flex flex-col items-center justify-center gap-8 py-5 px-16 bg-blue-50 border border-gray-300 rounded-lg">
          <div className="flex items-center justify-between gap-5 w-full">
            <AlgoSelect
              selectedAlgo={selectedAlgo}
              handleChange={handleChange}
              isRunning={isRunning}
            />
            <ElementsRangeSlider
              isRunning={isRunning}
              array={array}
              setArray={setArray}
            />
          </div>
          <div className="flex items-center justify-between gap-5 w-full">
            <SpeedControlSlider
              speed={speed}
              setSpeed={setSpeed}
              min={min}
              max={max}
            />
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleClick}
                className="cursor-pointer border-2 border-black px-5 py-0.5 rounded-xl bg-orange-500 text-white text-2xl font-semibold"
              >
                start
              </button>
              <ShuffleButton
                array={[...array]}
                setArray={setArray}
                isRunning={isRunning}
              />
              <button></button>
              <button></button>
            </div>
          </div>
        </header>
        <main className="bg-gray-200 border border-gray-400 shadow-sm rounded-t-lg rounded-b-sm w-full h-full px-1">
          <div className="w-full h-full flex justify-start items-end">
            {array.map((item, index) => {
              return (
                <Bar
                  key={index}
                  value={item}
                  outer={outer}
                  inner={inner}
                  index={index}
                />
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
