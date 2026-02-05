const Bar = ({ value, outer, inner, pivot, index }) => {
  const getBgColor = () => {
    if (outer === index && inner === index) return "bg-purple-500";
    if (outer === index) return "bg-sky-500";
    if (inner === index) return "bg-yellow-400";
    if (pivot === index) return "bg-pink-500";
    return "bg-gray-950";
  };
  return (
    <div
      className={`border border-slate-600 w-3 ${getBgColor()}`}
      style={{ height: `${value}px` }}
    />
  );
};

export default Bar;
