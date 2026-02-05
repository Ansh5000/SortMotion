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
import ExecuteButton from "./components/ExecuteButton";
import quick_Sort from "./algorithms/Quick_Sort";

function App() {
  const [array, setArray] = useState([
    74, 21, 58, 43, 67, 32, 79, 51, 26, 60, 38, 45, 71, 29, 54, 63, 22, 80, 47,
    35, 66, 59, 24, 73, 41, 56, 30, 49, 77, 62, 23, 50, 68, 37, 75, 42, 55, 31,
    69, 28, 44, 70, 53, 27, 61, 39, 76, 33, 57, 48, 25, 64, 40, 72, 36, 52, 78,
    46, 34, 65,
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [outer, setOuter] = useState(-1);
  const [inner, setInner] = useState(-1);
  const [pivot, setPivot] = useState(-1);
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
      case "quick":
        started = true;
        setIsRunning(true);
        await quick_Sort(
          setOuter,
          setInner,
          setPivot,
          setArray,
          tempArray,
          speedRef,
          n,
        );
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
      setPivot(-1);
      await Traverser(setOuter, n);
      setOuter(-1);
    }
    setIsRunning(false);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 h-screen w-[91vw] bg-gray-50 p-4">
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
              <ExecuteButton onclick={handleClick} />
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
                  pivot={pivot}
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
