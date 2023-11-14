import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTocardAction,
  decrementQuantityActions,
} from "../actions/CartActions";

const useCount = (init) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(init);

  const handleCountInc = (id) => {
    const countData = {
      countCart: count,
      key: id,
    };

    dispatch(addTocardAction(countData));
    setCount(count + 1);
  };

  const handleCountDec = (id) => {
    if (count <= 0) return;

    const countData = {
      countCart: count,
      key: id,
    };

    dispatch(decrementQuantityActions(countData));
    setCount(count - 1);
  };

  return { count, handleCountInc, handleCountDec };
};

export default useCount;
