import { useCallback, useState } from "react";
import { deleteLocalStorage } from "../utils/LocalStorage";
import { useDispatch } from "react-redux";
import {
  addTocardAction,
  decrementQuantityActions,
} from "../actions/CartActions";

const useCount = (init, removeFromCart) => {
  const [counts, setCounts] = useState(init);

  const dispatch = useDispatch();
  const handleCountInc = useCallback(
    (index, id) => {
      const countData = {
        countCart: counts[index],
        key: id,
      };

      setCounts((prevCounts) => {
        //copying the previous values of countsArray
        const updatedCounts = [...prevCounts];
        updatedCounts[index]++;

        dispatch(addTocardAction(countData));

        return updatedCounts;
      });
    },
    [dispatch, counts]
  );

  const handleCountDec = useCallback(
    (index, id) => {
      const countData = {
        countCart: counts[index],
        key: id,
      };

      setCounts((prevCounts) => {
        const updatedCounts = [...prevCounts];
        updatedCounts[index]--;

        dispatch(decrementQuantityActions(countData));

        if (updatedCounts[index] < 1) {
          updatedCounts[index] = 0;
          deleteLocalStorage("cart");
          removeFromCart(index);
        }
        return updatedCounts;
      });
    },
    [removeFromCart, dispatch, counts]
  );

  return { counts, handleCountInc, handleCountDec };
};

export default useCount;
