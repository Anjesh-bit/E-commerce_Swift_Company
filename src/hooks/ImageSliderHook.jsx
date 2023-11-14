import { useState } from "react";

const useImageSlider = (initValue, products, filter) => {
  const [index, setIndex] = useState(initValue);

  const onHandleNext = () => {
    if (index !== products.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const onHandlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(products.length - 1);
    }
  };

  return { index, onHandleNext, onHandlePrev };
};

export default useImageSlider;
