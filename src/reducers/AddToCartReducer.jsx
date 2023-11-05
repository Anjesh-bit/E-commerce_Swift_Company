import {
  ON_FAILED_ADD_CART,
  ON_FAILED_ADD_CART_COUNT,
  ON_START_ADD_CART,
  ON_START_ADD_CART_COUNT,
} from "../constants/AddToCartConstants";

const addToCartReducer = (state, action) => {
  switch (action.type) {
    case ON_START_ADD_CART:
      return {
        ...state,
        loading: true,
        cartData: [...state.cartData, action.payload],
      };
    case ON_FAILED_ADD_CART:
      return { ...state, error: action.payload, loading: false };
    default:
      return { ...state };
  }
};

export { addToCartReducer };
