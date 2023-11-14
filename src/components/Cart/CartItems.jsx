import { useDispatch, useSelector } from "react-redux";
import AppButton from "../../common/Button/AppButton";
import { useEffect } from "react";
import { getAllProductsAction } from "../../actions/ProductActions";
import useTotalPrice from "../../hooks/TotalPrice";

const CartItems = ({
  onHandleCountInc,
  onHandleCountDec,
  id,
  quantity,
  allProducts: products,
}) => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.productsReducer);

  const findOne = allProducts?.data?.products?.find(
    (item) => item.id === Number(id)
  );

  const { totalPrice } = useTotalPrice(findOne);

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
      <div className="cart-title">
        <h1>{findOne?.brand}</h1>
      </div>
      <div className="cart-price">Total Price : {findOne && totalPrice}</div>
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
