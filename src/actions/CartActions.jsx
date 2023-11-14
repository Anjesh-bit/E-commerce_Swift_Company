import {
  ON_FAILED_ADD_CART,
  ON_FAILED_ADD_CART_DEC,
  ON_START_ADD_CART,
  ON_START_ADD_CART_DEC,
} from "../constants/AddToCartConstants";

const addTocardAction = (data) => (dispatch) => {
  try {
    dispatch({
      type: ON_START_ADD_CART,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ON_FAILED_ADD_CART,
      payload: e,
    });
  }
};

const decrementQuantityActions = (data) => (dispatch) => {
  try {
    dispatch({
      type: ON_START_ADD_CART_DEC,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ON_FAILED_ADD_CART_DEC,
      payload: e,
    });
  }
};

export { addTocardAction, decrementQuantityActions };
