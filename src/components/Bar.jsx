const Bar = ({ value, outer, inner, index }) => {
  return (
    <div
      className={`bg-gray-950 border w-7 border-green-400 ${outer === index && "bg-sky-500"} ${inner === index && "bg-yellow-400"} ${outer === index && inner === index && "bg-purple-500"}`}
      style={{ height: `${value}px` }}
    />
  );
};

export default Bar;
