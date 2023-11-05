import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../actions/ProductActions";
import "./Shop.css";
import AppButton from "../../common/Button/AppButton";
import { Link } from "react-router-dom";
import LoadingIcon from "../../common/Loader/Loader";

const Shop = () => {
  const dispatch = useDispatch();
  const { loading, allProducts } = useSelector(
    (state) => state.productsReducer
  );

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  return (
    <div
      className="app___shop-wrapper"
      style={
        loading
          ? {
              height: "100vh",
            }
          : undefined
      }
    >
      {loading && (
        <LoadingIcon title="Store" color="rgba(0, 0, 0)" size="50px" />
      )}
      {!loading && (
        <div className="shop-inner-wrapper">
          {allProducts?.data?.products?.map((products, indexi) => (
            <div key={`index${Math.random(indexi + 2)}`} className="shop-card">
              <div className="shop-image-container">
                <img
                  src={products.images.find((image, indexj) => indexj === 0)}
                  alt="mobile"
                />
              </div>
              <div className="shop-description">
                <h4>{products.title}</h4>
                <h1>{`$${products.price}`}</h1>
              </div>
              <Link to={`/shop/${products.id}`}>
                <AppButton btnText="Shop Now" btnClass="shop-now-btn" />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
