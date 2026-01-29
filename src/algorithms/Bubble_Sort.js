import sleep from "../utils/sleep";
const bubble_sort = async (setOuter, setInner, setArray, tempArray, n) => {
  for (let i = 0; i < n - 1; i++) {
    setOuter(i);
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      setInner(j);
      if (tempArray[j] > tempArray[j + 1]) {
        let temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
        setArray([...tempArray]);
        swapped = true;
      }
      await sleep(50);
    }
    if (!swapped) break;
  }
};

export default bubble_sort;
