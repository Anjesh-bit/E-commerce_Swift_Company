import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Cart.css";
import NoData from "../../common/NoData/NoData";
const ShoppingBag = () => {
  const { loading, cartData } = useSelector((state) => state?.cartData);
  return (
    <>
      {cartData ? (
        <div className="app__cart-main">
          <div className="grid-container">
            {cartData?.map((cartData, index) => (
              // note: we can use uuid in real world to generate keys
              <div
                className="cart-container"
                key={`key${Math.random(index + 2)}`}
              >
                <div className="cart-title">
                  <h1>{cartData?.title}</h1>
                </div>
                <div className="cart-price">
                  Total Price : $<span>{cartData?.price}</span>
                </div>
                <div className="cart-image-container">
                  <img src={cartData?.image} alt="iPhone" />
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
