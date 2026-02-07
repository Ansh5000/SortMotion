import sleep from "../utils/sleep";

const quick_Sort = async (
  setOuter,
  setInner,
  setPivot,
  setArray,
  tempArray,
  time,
  n,
) => {
  await quick_Sort_executor(
    tempArray,
    setArray,
    0,
    n - 1,
    time,
    setOuter,
    setInner,
    setPivot,
  );
};

const quick_Sort_executor = async (
  arr,
  setArray,
  low,
  high,
  time,
  setOuter,
  setInner,
  setPivot,
) => {
  if (low >= high) {
    return;
  }
  let partitionIndex = await partition(
    arr,
    low,
    high,
    setArray,
    time,
    setOuter,
    setInner,
    setPivot,
  );
  await quick_Sort_executor(
    arr,
    setArray,
    low,
    partitionIndex - 1,
    time,
    setOuter,
    setInner,
    setPivot,
  );
  await quick_Sort_executor(
    arr,
    setArray,
    partitionIndex + 1,
    high,
    time,
    setOuter,
    setInner,
    setPivot,
  );
};

const partition = async (
  arr,
  low,
  high,
  setArray,
  time,
  setOuter,
  setInner,
  setPivot,
) => {
  let pivot = arr[high];

  let i = low - 1;
  setPivot(Math.floor((low+high)/2));
  for (let j = low; j < high; j++) {
    setOuter(i);
    setInner(j);
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await sleep(time.current);
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await sleep(time.current);

  return i + 1;
};

export default quick_Sort;
