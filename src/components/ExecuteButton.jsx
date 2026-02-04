import PlayIcon from "./icons/PlayIcon";
const ExecuteButton = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="flex items-center justify-center gap-3 cursor-pointer border-2 border-black px-5 py-0.5 rounded-xl bg-orange-500 "
    >
      <PlayIcon className="text-white" />
      <p className="text-white text-2xl font-semibold">Start</p>
    </button>
  );
};

export default ExecuteButton;
