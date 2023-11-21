import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../common/Button/AppButton";
import { useEffect } from "react";
import { getAllProductsAction } from "../../actions/ProductActions";
import useTotalPrice from "../../hooks/TotalPrice";
import Cancel from "../../data/Data";
import { removeFromCartActions } from "../../actions/CartActions";

const CartItems = ({
  onHandleCountInc,
  onHandleCountDec,
  id,
  quantity,
  cartData,
  allProducts: products,
}) => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productsReducer);

  const findOne = allProducts?.data?.products?.find(
    (item) => item.id === Number(id)
  );

  const { totalPrice } = useTotalPrice(findOne);

  const handleRemoveCart = () => {
    dispatch(removeFromCartActions({ key: id }));
  };

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  useEffect(() => {
    if (products instanceof Function) {
      products(allProducts);
    }
  }, [allProducts, products]);

  return (
    <div className="cart-container">
      <div className="ic-container">
        <img src={Cancel} alt="cancel" onClick={handleRemoveCart} />
      </div>
      <div className="cart-title">
        <h1>{findOne?.brand}</h1>
      </div>
      <div className="cart-price">
        Total Price : {findOne && totalPrice * quantity}
      </div>
      <div className="cart-image-container">
        <img src={findOne?.images[0]} alt="iPhone" />
      </div>
      <div className="inc-dec-counter">
        <AppButton
          btnText="-"
          btnClass="cart-btn margin"
          onClick={onHandleCountDec}
        />
        <div className="count-value">
          <span>{quantity}</span>
        </div>
        <AppButton btnText="+" btnClass="cart-btn" onClick={onHandleCountInc} />
      </div>
    </div>
  );
};

export default CartItems;
