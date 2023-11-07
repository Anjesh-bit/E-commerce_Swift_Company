import {
  ON_FAILED_ADD_CART,
  ON_START_ADD_CART,
} from "../constants/AddToCartConstants";

const addToCartReducer = (state = { countCart: 0 }, action) => {
  switch (action.type) {
    case ON_START_ADD_CART:
      return {
        ...state,
        isSuccess: true,
        countCart: action?.payload?.countCart,
        cartData: [...state.cartData, action.payload],
      };

    case ON_FAILED_ADD_CART:
      return { ...state, error: action.payload, isSuccess: false };

    default:
      return { ...state };
  }
};

export { addToCartReducer };
