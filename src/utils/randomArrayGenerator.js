const randomArrayGenerator = (array, setArray, min, max) => {
  const range = max - min + 1;
  let tempArray = [];
  let arraySet = new Set();
  while (arraySet.size < range - 1) {
    const num = Math.floor(Math.random() * (range - 1)) + min;
    arraySet.add(num);
  }
  let i = 0;
  arraySet.forEach((element) => {
    tempArray[i] = element;
    i++;
  });
  setArray([...tempArray]);
};

export default randomArrayGenerator;
