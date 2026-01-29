import { useState } from "react";
import Bar from "./components/Bar";
import bubble_sort from "./algorithms/Bubble_Sort";
import selection_sort from "./algorithms/Selection_Sort";
import insertion_sort from "./algorithms/Insertion_Sort";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function App() {
  const [array, setArray] = useState([
    45, 92, 18, 77, 61, 33, 100, 58, 27, 84, 11, 69, 73, 56, 90, 25, 39, 88, 64,
    71, 15, 97, 42, 59, 81, 20, 66, 74, 53, 99, 31, 60, 86, 49, 17, 95, 36, 72,
  ]);
  const [outer, setOuter] = useState(-1);
  const [inner, setInner] = useState(-1);
  const handleClick = async () => {
    let tempArray = [...array];
    let n = tempArray.length;

    await bubble_sort(setOuter, setInner, setArray, tempArray, n);

    // await selection_sort(setOuter, setInner, setArray, tempArray, n);

    // await insertion_sort(setOuter, setInner, setArray, tempArray, n);

    setOuter(-1);
    setInner(-1);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-4 h-screen w-[90vw] bg-gray-50 p-4">
        <header className="flex flex-col items-center justify-center gap-5 p-5 bg-blue-50 border border-gray-300 rounded-lg">
          <div className="flex items-center justify-evenly gap-5">
            <button></button>
            <button></button>
          </div>
          <div className="flex items-center justify-evenly gap-5">
            <button></button>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={handleClick}
                className="cursor-pointer border-2 border-black px-5 py-1 rounded-full bg-orange-500 text-white text-2xl font-semibold"
              >
                start
              </button>
              <button></button>
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
