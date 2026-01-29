const Bar = ({ value, outer, inner, index }) => {
  const getBgColor = () => {
    if (outer === index && inner === index) return "bg-purple-500";
    if (outer === index) return "bg-sky-500";
    if (inner === index) return "bg-yellow-400";
    return "bg-gray-950";
  };
  return (
    <div
      className={`border border-slate-600 w-7 ${getBgColor()}`}
      style={{ height: `${value}px` }}
    />
  );
};

export default Bar;
