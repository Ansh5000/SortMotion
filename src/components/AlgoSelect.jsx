const AlgoSelect = ({ selectedAlgo, handleChange, isRunning }) => {
  return (
    <select
      id="algorithms"
      value={selectedAlgo}
      onChange={handleChange}
      className={`rounded-lg p-1.5 transition-colors ${
        isRunning
          ? "bg-gray-100 cursor-not-allowed text-gray-400 border-2 border-gray-300"
          : "bg-violet-100 cursor-pointer text-gray-950 font-semibold border-2 border-gray-900"
      }`}
      disabled={isRunning}
    >
      <option value="nothing" className="text-gray-400" disabled>
        Select An Algorithm
      </option>
      <option value="bubble">Bubble Sort</option>
      <option value="selection">Selection Sort</option>
      <option value="insertion">Insertion Sort</option>
      <option value="merge">Merge Sort</option>
      <option value="quick">Quick Sort</option>
    </select>
  );
};

export default AlgoSelect;
