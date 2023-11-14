import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

const useUpdateLocalStorage = (counts) => {
  
  useEffect(() => {
    const data = getLocalStorage("cart").map((data) => {
      return {
        ...data,
        countCart: counts,
      };
    });
    setLocalStorage("cart", data);
  });
};

export { useUpdateLocalStorage };
