import sleep from "../utils/sleep";

const insertion_sort = async (
  setOuter,
  setInner,
  setArray,
  tempArray,
  time,
  n,
) => {
  for (let i = 1; i < n; i++) {
    let key = tempArray[i];
    setOuter(i);
    let j = i - 1;
    while (j >= 0 && tempArray[j] > key) {
      setInner(j);
      tempArray[j + 1] = tempArray[j];
      setArray([...tempArray]);
      j--;
      await sleep(time.current);
    }
    tempArray[j + 1] = key;
  }
};

export default insertion_sort;
