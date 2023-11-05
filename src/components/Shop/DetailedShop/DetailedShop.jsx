import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductByIdAction } from "../../../actions/ProductActions";
import { useParams } from "react-router-dom";
import "./DetailedShop.css";
import useImageSlider from "../../../hooks/ImageSliderHook";
import LoadingIcon from "../../../common/Loader/Loader";
import AppButton from "../../../common/Button/AppButton";
import { addTocardAction } from "../../../actions/CartActions";

const DetailedShop = () => {
  //get the id from the params if we want to get query params the useSearchParams() hooks can be used
  const { id } = useParams();
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
    const countData = {
      title: singleProduct?.data?.title,
      price: totalPrice,
      image: singleProduct?.data?.images?.[0],
    };
    e.preventDefault();
    dispatch(addTocardAction(countData));
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
            <div className="detailed-inner-wrapper">
              <div className="products">
                <div className="detailed-title">
                  <h4>New season, new home</h4>
                  <h1>SS20 Collection</h1>
                </div>
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
                <h1>{singleProduct?.data?.title}</h1>
                <div>
                  $<span>{singleProduct?.data?.price}</span>
                </div>
                <div>
                  ${singleProduct?.data?.price}
                  <span>{singleProduct?.data?.discountPercentage} %off</span>
                </div>
                <div>
                  <AppButton
                    btnClass="btn-addto-bag"
                    btnText="Add To Bag"
                    onClick={handleClick}
                  />
                </div>
                <p>{singleProduct?.data?.description}</p>
                <div>
                  Total Price $ : <span>{`${totalPrice}`}</span>
                </div>
              </div>
            </div>
          )}
        </>
      }
    </div>
  );
};

export default DetailedShop;
