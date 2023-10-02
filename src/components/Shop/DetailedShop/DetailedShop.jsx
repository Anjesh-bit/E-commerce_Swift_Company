import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductByIdAction } from "../../../actions/ProductActions";
import { useParams } from "react-router-dom";
import "./DetailedShop.css";
import useImageSlider from "../../../hooks/ImageSliderHook";

const DetailedShop = () => {
  //get the id from the params if we want to get query params the useSearchParams() hooks can be used
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, singleProduct } = useSelector(
    (state) => state.singleProduct
  );
  const product = loading && singleProduct.data.images;
  const { index, onHandleNext, onHandlePrev } = useImageSlider(0, product);

  useEffect(() => {
    dispatch(getSingleProductByIdAction(id));
  }, [dispatch, id]);

  return (
    <div className="app___detailed-wrapper">
      {loading && (
        <div className="detailed-inner-wrapper">
          <div className="detailed-title">
            <h4>New season, new home</h4>
            <h1>SS20 Collection</h1>
          </div>
          <div className="slider-detailed-wrapper">
            {singleProduct.data.images.map(
              (images, indexj) =>
                indexj === index && (
                  <div className="slider-image-container">
                    <img src={images} alt={`mobile${index}`} />
                    <div className="slider-btn"></div>
                  </div>
                )
            )}
          </div>
          <div className="image-description-wrapper"></div>
        </div>
      )}
    </div>
  );
};

export default DetailedShop;
