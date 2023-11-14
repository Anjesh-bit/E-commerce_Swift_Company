import { useMemo } from "react";

const useTotalPrice = (data) => {
  const totalPrice = useMemo(() => {
    const discountedPrice = (data?.price * data?.discountPercentage) / 100;

    const totalPrice = data?.price - discountedPrice;
    return Math.ceil(totalPrice);
  }, [data?.price, data?.discountPercentage]);

  return { totalPrice };
};

export default useTotalPrice;
