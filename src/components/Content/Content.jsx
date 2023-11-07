import AppButton from "../../common/Button/AppButton";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="app___content-wrapper">
      <div className="content-text">
        <div className="sm-text">Your products is as unique as you are</div>
        <div className="lg-text">
          Brightening with beautiful, durable products.
        </div>
      </div>
      <div className="shop-btn-wrapper">
        <Link to="/shop">
          <AppButton btnClass="shop-btn" btnText="Shop Now" />
        </Link>
      </div>
    </div>
  );
};

export default Content;
