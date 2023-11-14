// DetailedShop.js
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductByIdAction } from "../../../actions/ProductActions";
import { useParams } from "react-router-dom";
import "./DetailedShop.css";
import useImageSlider from "../../../hooks/ImageSliderHook";
import LoadingIcon from "../../../common/Loader/Loader";
import AppButton from "../../../common/Button/AppButton";
import { addTocardAction } from "../../../actions/CartActions";
import useCount from "../../../hooks/CountHook";
import { getLocalStorage, setLocalStorage } from "../../../utils/LocalStorage";
import useTotalPrice from "../../../hooks/TotalPrice";
import { IconList } from "../../../data/Data";

const DetailedShop = () => {
  //get the id from the params if we want to get query params the useSearchParams() hooks can be used
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const { count, handleCountInc, handleCountDec } = useCount(
    getLocalStorage("cart")?.find((items) => items.id === id)?.quantity || 1
  );

  const { loading, singleProduct } = useSelector(
    (state) => state.singleProduct
  );

  const { cartData } = useSelector((state) => state.cartData);

  useMemo(() => {
    setLocalStorage("cart", cartData);
  }, [cartData]);

  const product = useMemo(
    () => singleProduct?.data?.images,
    [singleProduct?.data?.images]
  );

  const { totalPrice } = useTotalPrice(singleProduct?.data);

  const { index, onHandleNext, onHandlePrev } = useImageSlider(0, product);

  const handleClick = (e) => {
    e.preventDefault();
    const countData = {
      countCart: count,
      key: id,
    };
    dispatch(addTocardAction(countData));
  };

  useEffect(() => {
    dispatch(getSingleProductByIdAction(id));
  }, [dispatch, id]);

  useEffect(() => {
    const data = cartData?.find((items) => items.id === id);
    const quantityData = data
      ? data
      : {
          quantity:
            getLocalStorage("cart")?.find((items) => items.id === id)
              ?.quantity || 0,
        };

    const { quantity } = quantityData;
    setQuantity(quantity);
  }, [cartData, id]);

  return (
    <div
      className="app___detailed-wrapper"
      style={loading ? { height: "100vh" } : undefined}
    >
      {
        <>
          {loading && (
            <LoadingIcon title="Product" color="rgba(0, 0, 0)" size="50px" />
          )}
          {!loading && (
            <>
              <div className="detailed-title">
                <h1>New season, new home</h1>
                <div>SS20 Collection</div>
              </div>
              <div className="detailed-inner-wrapper">
                <div className="products">
                  <div className="slider-detailed-wrapper">
                    {singleProduct?.data?.images?.map(
                      (images, indexj) =>
                        indexj === index && (
                          <div
                            className="outer-slider-container"
                            key={`${Math.random(index + 2)}index`}
                          >
                            <div
                              className="slider-image-container"
                              key={`index${Math.random(indexj + 2)}`}
                            >
                              <img src={images} alt={`mobile${index}`} />
                              <div className="slider-btn"></div>
                            </div>
                            <div className="icon-container">
                              <div
                                className="arrow-left left"
                                onClick={onHandlePrev}
                              >
                                <img
                                  src={IconList.ArrowLeft}
                                  alt="arrowRight"
                                />
                              </div>
                              <div
                                className="arrow-right right"
                                onClick={onHandleNext}
                              >
                                <img
                                  src={IconList.ArrowRight}
                                  alt="arrowLeft"
                                />
                              </div>
                            </div>
                          </div>
                        )
                    )}
                  </div>
                </div>
                <div className="products-description">
                  <h2>{singleProduct?.data?.title}</h2>
                  <div className="price">
                    $<span>{singleProduct?.data?.price}</span>
                  </div>
                  <div>
                    <span>{singleProduct?.data?.discountPercentage}% off</span>
                  </div>
                  <div className="items-cart">
                    {quantity > 0 && (
                      <div className="inc-dec-counter">
                        <AppButton
                          btnText="-"
                          btnClass="cart-btn margin"
                          onClick={() => handleCountDec(id)}
                        />
                        <div className="count-value">
                          <span>{quantity}</span>
                        </div>
                        <AppButton
                          btnText="+"
                          btnClass="cart-btn"
                          onClick={() => handleCountInc(id)}
                        />
                      </div>
                    )}
                    {quantity === 0 && (
                      <AppButton
                        btnClass="btn-addto-bag"
                        btnText="Add to Bag"
                        onClick={handleClick}
                      />
                    )}
                  </div>
                  <div className="total_price">
                    Total Price $ : <span>{`${totalPrice * quantity}`}</span>
                  </div>
                  <div className="description">
                    <span>Product Detail :</span>
                    <p>{singleProduct?.data?.description}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      }
    </div>
  );
};

export default DetailedShop;
