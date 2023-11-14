import {
  ON_FAILED_ADD_CART,
  ON_FAILED_ADD_CART_DEC,
  ON_START_ADD_CART,
  ON_START_ADD_CART_DEC,
  ON_FAILED_ADD_CART_TOTAL_QUANTITY,
} from "../constants/AddToCartConstants";

const addToCartReducer = (state = { cartData: [{ quantity: 0 }] }, action) => {
  switch (action.type) {
    case ON_START_ADD_CART:
      const isExists = state.cartData.find(
        (items) => items.id === action.payload.key
      );

      if (!isExists) {
        return {
          cartData: [
            ...state.cartData,
            { id: action.payload.key, quantity: 1 },
          ],
        };
      } else {
        return {
          cartData: state.cartData.map((items) => {
            if (items.id === action.payload.key) {
              return { ...items, quantity: action.payload.countCart + 1 };
            } else {
              return items;
            }
          }),
        };
      }

    case ON_START_ADD_CART_DEC:
      const existingItem = state.cartData.find(
        (items) => items.id === action.payload.key
      );

      if (existingItem?.quantity === 1) {
        return {
          cartData: state.cartData.filter(
            (items) => items.id !== action.payload.key
          ),
        };
      } else {
        return {
          cartData: state.cartData.map((items) => {
            if (items.id === action.payload.key) {
              return { ...items, quantity: action.payload.countCart - 1 };
            } else {
              return items;
            }
          }),
        };
      }

    case ON_FAILED_ADD_CART_TOTAL_QUANTITY:
      return { ...state, error: action.payload };

    case ON_FAILED_ADD_CART_DEC:
      return { ...state, error: action.payload };

    case ON_FAILED_ADD_CART:
      return { ...state, error: action.payload };

    default:
      return { ...state };
  }
};

export { addToCartReducer };
