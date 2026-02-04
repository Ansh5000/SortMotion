import shuffleArray from "../utils/shuffleArray";
import ShuffleIcon from "./icons/ShuffleIcon";

const ShuffleButton = ({ array, setArray, isRunning }) => {
  return (
    <button
      onClick={() => {
        shuffleArray(array, setArray);
      }}
      disabled={isRunning}
      className={`flex items-center justify-center gap-3 border-2 border-black px-5 py-0.5 rounded-xl bg-blue-500 ${isRunning ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"}`}
    >
      <ShuffleIcon className="text-white" />
      <p className="text-white text-2xl font-semibold">Shuffle</p>
    </button>
  );
};

export default ShuffleButton;
