import sleep from "../utils/sleep";

const Traverser = async (setOuter, tempArray, n) => {
  for (let i = 0; i < n; i++) {
    setOuter(i)
    await sleep(50)
  }
};

export default Traverser;
