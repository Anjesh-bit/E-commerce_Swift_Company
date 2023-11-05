import AppButton from "../../common/Button/AppButton";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="app___content-wrapper">
      <div className="content-text">
        <h4>
          <span>Your home is as unique as you are</span>
        </h4>
        <h1>
          <span>Brightening homes with beautiful, durable products.</span>
        </h1>
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
