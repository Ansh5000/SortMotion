import sleep from "../utils/sleep";

const Traverser = async (setOuter, n) => {
  for (let i = 0; i < n; i++) {
    setOuter(i);
    await sleep(40);
  }
};

export default Traverser;
