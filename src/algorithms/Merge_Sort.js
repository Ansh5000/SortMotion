import sleep from "../utils/sleep";

const merge_sort = async (setOuter, setInner, setArray, tempArray, time, n) => {
  await merge_sort_executor(
    tempArray,
    setArray,
    0,
    n - 1,
    time,
    setOuter,
    setInner,
  );
};

const merge_sort_executor = async (
  arr,
  setArray,
  low,
  high,
  time,
  setOuter,
  setInner,
) => {
  if (low >= high) {
    return;
  }
  let mid = Math.floor((low + high) / 2);
  await merge_sort_executor(arr, setArray, low, mid, time, setOuter, setInner);
  await merge_sort_executor(
    arr,
    setArray,
    mid + 1,
    high,
    time,
    setOuter,
    setInner,
  );
  await merge(arr, low, mid, high, setArray, time, setOuter, setInner);
};

const merge = async (
  arr,
  low,
  mid,
  high,
  setArray,
  time,
  setOuter,
  setInner,
) => {
  let tempArr = [];
  let i = low;
  let j = mid + 1;
  while (i <= mid && j <= high) {
    setOuter(i);
    setInner(j);
    await sleep(time.current);
    if (arr[i] < arr[j]) {
      tempArr.push(arr[i]);
      i++;
    } else {
      tempArr.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    setOuter(i);
    await sleep(time.current);
    tempArr.push(arr[i]);
    i++;
  }
  while (j <= high) {
    setInner(j);
    await sleep(time.current);
    tempArr.push(arr[j]);
    j++;
  }
  setInner(-1);
  for (let k = low; k <= high; k++) {
    arr[k] = tempArr[k - low];
    setOuter(k);
    setArray([...arr]);
    await sleep(time.current);
  }
  setOuter(-1);
  setInner(-1);
};

export default merge_sort;
