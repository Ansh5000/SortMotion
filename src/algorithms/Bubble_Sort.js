import sleep from "../utils/sleep";
const bubble_sort = async (setOuter, setInner, setArray, tempArray, n) => {
  for (let i = 0; i < n - 1; i++) {
    setOuter(i);
    for (let j = 0; j < n - i - 1; j++) {
      setInner(j);
      if (tempArray[j] > tempArray[j + 1]) {
        let temp = tempArray[j];
        tempArray[j] = tempArray[j + 1];
        tempArray[j + 1] = temp;
        setArray([...tempArray]);
      }
      await sleep(50);
    }
  }
};

export default bubble_sort;
