// ShoppingBag.js
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import NoData from "../../common/NoData/NoData";
import { setLocalStorage } from "../../utils/LocalStorage";
import useCount from "../../hooks/MultipleCountHook";
import CartItems from "./CartItems";

const ShoppingBag = () => {
  const { cartData } = useSelector((state) => state?.cartData);
  const [product, setProduct] = useState([{}]);

  /*remove the duplicate keys if
   any though not necessary cause 
   we have found by id using reducer
   p.s just for demonstration
   */

  const filteredData = useMemo(() => {
    const uniqueKeys = new Set();
    return cartData?.filter((item) => {
      if (!uniqueKeys.has(item.id)) {
        uniqueKeys.add(item.id);
        return true;
      }
      return false;
    });
  }, [cartData]);

  const removeFromCart = useCallback(
    (index) => {
      const updatedData = [...cartData];
      updatedData.splice(index, 1);
      setLocalStorage("cart", updatedData);
    },
    [cartData]
  );

  /* 
  create an empty array same length 
  as cardData, if state is updated then 
  i.e if length is 3, 
  initial-[0,0,0] 
  updated:[1,2,5] 
  i.e 1 if counts[0] is inc by 1 
  and so on.
  p.s- counts contains array of 
  incremented value with the same length as cardData
  */

  const { handleCountInc, handleCountDec } = useCount(
    cartData?.map((items) => items.quantity),
    removeFromCart
  );

  const allProductHandle = useCallback((product) => {
    setProduct(product);
  }, []);

  const totalQty = useMemo(() => {
    const calculateTotal = (cartItem, products) => {
      const data = cartItem?.reduce((acc, cartItem) => {
        const isMatch = products?.find(
          (product) => product.id.toString() === cartItem.id
        );

        let totalPrice = isMatch?.price * cartItem?.quantity;

        if (isMatch) {
          const discount = isMatch?.discountPercentage || 0;
          totalPrice -= discount;
        }
        acc += totalPrice;
        return acc;
      }, 0);
      return data;
    };

    const cartItemIds = cartData?.map((item) => item.id);
    const allData = product?.data?.products?.filter((items) => {
      return cartItemIds?.includes(items.id.toString());
    });

    return calculateTotal(cartData, allData);
  }, [cartData, product]);

  const renderTotalQty = isNaN(totalQty) ? "N/A" : Math.ceil(totalQty);

  useEffect(() => {
    setLocalStorage("cart", filteredData);
  }, [filteredData]);

  return (
    <>
      {filteredData.length > 0 ? (
        <div className="app__cart-main">
          <div className="grid-container">
            {filteredData?.map((items, index) => (
              <CartItems
                allProducts={allProductHandle}
                key={items?.id}
                {...items}
                onHandleCountInc={() =>
                  handleCountInc(index, cartData[index]?.id)
                }
                onHandleCountDec={() =>
                  handleCountDec(index, cartData[index]?.id)
                }
              />
            ))}
          </div>
          <div className="totalQty">
            Total Price : $ <span>{renderTotalQty}</span>
          </div>
        </div>
      ) : (
        <div>
          <NoData title="No Cart Data.." />
        </div>
      )}
    </>
  );
};

export default ShoppingBag;
