import {
  ON_FAILED_ADD_CART,
  ON_FAILED_ADD_CART_DEC,
  ON_FAILED_REMOVE_FROM_CART,
  ON_START_ADD_CART,
  ON_START_ADD_CART_DEC,
  ON_START_REMOVE_FROM_CART,
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

const removeFromCartActions = (data) => (dispatch) => {
  try {
    dispatch({
      type: ON_START_REMOVE_FROM_CART,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: ON_FAILED_REMOVE_FROM_CART,
      payload: e,
    });
  }
};

export { addTocardAction, decrementQuantityActions, removeFromCartActions };
