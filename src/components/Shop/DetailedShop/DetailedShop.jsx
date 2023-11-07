import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductByIdAction } from "../../../actions/ProductActions";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailedShop.css";
import useImageSlider from "../../../hooks/ImageSliderHook";
import LoadingIcon from "../../../common/Loader/Loader";
import AppButton from "../../../common/Button/AppButton";
import { addTocardAction } from "../../../actions/CartActions";
import useCount from "../../../hooks/CountHook";

const DetailedShop = () => {
  //get the id from the params if we want to get query params the useSearchParams() hooks can be used
  const { id } = useParams();
  const { count, handleCountInc } = useCount(0);

  const dispatch = useDispatch();
  const { loading, singleProduct } = useSelector(
    (state) => state.singleProduct
  );

  const product = useMemo(
    () => singleProduct?.data?.images,
    [singleProduct?.data?.images]
  );

  const totalPrice = useMemo(() => {
    const discountedPrice =
      (singleProduct?.data?.price * singleProduct?.data?.discountPercentage) /
      100;
    const totalPrice = singleProduct?.data?.price - discountedPrice;
    return Math.ceil(totalPrice);
  }, [singleProduct?.data?.price, singleProduct?.data?.discountPercentage]);

  const { index, onHandleNext, onHandlePrev } = useImageSlider(0, product);

  const handleClick = (e) => {
    e.preventDefault();
    const countData = {
      title: singleProduct?.data?.title,
      price: totalPrice,
      image: singleProduct?.data?.images?.[0],
      key: id,
      countCart: count,
    };
    dispatch(addTocardAction(countData));
    handleCountInc();
  };

  useEffect(() => {
    dispatch(getSingleProductByIdAction(id));
  }, [dispatch, id]);

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
                            className="slider-image-container"
                            key={`index${Math.random(indexj + 2)}`}
                          >
                            <img src={images} alt={`mobile${index}`} />
                            <div className="slider-btn"></div>
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
                    <span>{count} items added to cart</span>
                    <AppButton
                      btnClass="btn-addto-bag"
                      btnText="Add to Bag"
                      onClick={handleClick}
                    />
                  </div>
                  <div className="total_price">
                    Total Price $ : <span>{`${totalPrice * count}`}</span>
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
