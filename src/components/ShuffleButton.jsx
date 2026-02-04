import shuffleArray from "../utils/shuffleArray";

const ShuffleButton = ({ array, setArray, isRunning }) => {
  return (
    <button
      onClick={() => {
        shuffleArray(array, setArray);
      }}
      disabled={isRunning}
      className={`border-2 border-black px-5 py-0.5 rounded-xl bg-blue-500 text-white text-2xl font-semibold ${isRunning ? "cursor-not-allowed opacity-50" : "cursor-pointer opacity-100"}`}
    >
      Shuffle
    </button>
  );
};

export default ShuffleButton;
