import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  getAllProductsReducer,
  getSingleProductReducer,
} from "./reducers/GetAllProductsReducer";
import { addToCartReducer } from "./reducers/AddToCartReducer";
import { getLocalStorage } from "./utils/LocalStorage";

//combine all the reducres at once
const reducers = combineReducers({
  productsReducer: getAllProductsReducer,
  singleProduct: getSingleProductReducer,
  cartData: addToCartReducer,
});

const getDataLocalStorage = () => {
  let dataLocalStorage = [];

  if (getLocalStorage("cart")) {
    dataLocalStorage = getLocalStorage("cart");
  }
  return dataLocalStorage || [];
};

// initial state for the Store when component mounts
const initialState = {
  productsReducer: { loading: true, allProducts: "" },
  singleProduct: { loading: true, singleProduct: "" },
  cartData: { cartData: getDataLocalStorage() },
};

//middleware thunk for decreasing side effects and returning the action creators as a function instead of plain js object
const middleware = [thunk];

const Store = () => {
  const checkForReactDevTools =
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined";
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      checkForReactDevTools
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (args) => args
    )
  );
};

export default Store;
