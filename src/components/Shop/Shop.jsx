import AppButton from "../../common/Button/AppButton";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="app___shop-wrapper">
      <div className="shop-text">
        <h4>
          <span>Your home is as unique as you are</span>
        </h4>
        <h1>
          <span>Brightening homes with beautiful, durable products.</span>
        </h1>
      </div>
      <div className="shop-btn-wrapper">
        <AppButton btnClass="shop-btn" btnText="Shop Now" />
      </div>
    </div>
  );
};

export default Shop;
