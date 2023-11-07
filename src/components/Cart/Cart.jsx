// ShoppingBag.js
import React, { useCallback, useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import NoData from "../../common/NoData/NoData";
import { getLocalStorage, setLocalStorage } from "../../utils/LocalStorage";
import AppButton from "../../common/Button/AppButton";
import useCount from "../../hooks/MultipleCountHook";

const ShoppingBag = () => {
  const { cartData } = useSelector((state) => state?.cartData);

  //remove the duplicate keys
  const filteredData = useMemo(() => {
    const uniqueKeys = new Set();
    return cartData?.filter((item) => {
      if (!uniqueKeys.has(item.key)) {
        uniqueKeys.add(item.key);
        return true;
      }
      return false;
    });
  }, [cartData]);

  const [cartItemsUpdate, setCartItemsUpdate] = useState(
    JSON.parse(getLocalStorage("cart")) || []
  );

  const removeFromCart = useCallback(
    (index) => {
      filteredData?.splice(index, 1);
      setLocalStorage("cart", filteredData);
      setCartItemsUpdate(JSON.parse(getLocalStorage("cart")));
    },
    [filteredData]
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
  incremented value with same length as cardData
  */

  const { counts, handleCountInc, handleCountDec } = useCount(
    cartData?.map(() => 0),
    removeFromCart
  );

  useEffect(() => {
    setLocalStorage("allcartItems", cartData);
    setLocalStorage("cart", filteredData);
    setCartItemsUpdate(JSON.parse(getLocalStorage("cart")) || []);
  }, [filteredData, cartData]);

  return (
    <>
      {cartItemsUpdate ? (
        <div className="app__cart-main">
          <div className="grid-container">
            {cartItemsUpdate?.map((cartItem, index) => (
              <div className="cart-container" key={`key${index}`}>
                <div className="cart-title">
                  <h1>{cartItem?.title}</h1>
                </div>
                <div className="cart-price">
                  Total Price : $
                  {counts[index] >= 0 ? cartItem.price * counts[index] : 0}
                </div>
                <div className="cart-image-container">
                  <img src={cartItem?.image} alt="iPhone" />
                </div>
                <div className="inc-dec-counter">
                  <AppButton
                    btnText="+"
                    btnClass="cart-btn margin"
                    onClick={() => handleCountInc(index)}
                  />
                  <div className="count-value">
                    <span>{counts[index]}</span>
                  </div>
                  <AppButton
                    btnText="-"
                    btnClass="cart-btn"
                    onClick={() => handleCountDec(index)}
                  />
                </div>
              </div>
            ))}
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
