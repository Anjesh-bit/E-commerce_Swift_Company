import { useCallback, useState, useEffect } from "react";

const useCount = (init, removeFromCart) => {
  const [counts, setCounts] = useState(init);

  const handleCountInc = useCallback((index) => {
    setCounts((prevCounts) => {
      //copying the previous values of countsArray
      const updatedCounts = [...prevCounts];
      updatedCounts[index]++;
      return updatedCounts;
    });
  }, []);

  const handleCountDec = useCallback(
    (index) => {
      setCounts((prevCounts) => {
        const updatedCounts = [...prevCounts];
        updatedCounts[index]--;
        if (updatedCounts[index] < 0) {
          updatedCounts[index] = 0;
          removeFromCart(index);
        }
        return updatedCounts;
      });
    },
    [removeFromCart]
  );

  return { counts, handleCountInc, handleCountDec };
};

export default useCount;
