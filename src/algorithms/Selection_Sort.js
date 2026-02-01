import sleep from "../utils/sleep";

const selection_sort = async (
  setOuter,
  setInner,
  setArray,
  tempArray,
  time,
  n,
) => {
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    setOuter(min);
    for (let j = i + 1; j < n; j++) {
      setInner(j);
      await sleep(time.current);
      if (tempArray[min] > tempArray[j]) {
        min = j;
        setOuter(min);
      }
    }
    let temp = tempArray[i];
    tempArray[i] = tempArray[min];
    tempArray[min] = temp;
    setArray([...tempArray]);
  }
};

export default selection_sort;
