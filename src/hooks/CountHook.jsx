import { useState } from "react";

const useCount = (init) => {
  const [count, setCount] = useState(init);
  const handleCountInc = () => {
    setCount(count + 1);
  };
  return { count, handleCountInc };
};

export default useCount;
