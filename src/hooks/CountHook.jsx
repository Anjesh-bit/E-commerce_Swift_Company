import { useState } from "react";

const useCount = (init) => {
  const [count, setCount] = useState(init);
  const handleCount = () => {
    setCount(count + 1);
  };
};
