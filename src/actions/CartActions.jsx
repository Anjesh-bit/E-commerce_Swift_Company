import {
  ON_FAILED_ADD_CART,
  ON_START_ADD_CART,
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
      payload: e.response.data.message ? e.response.data.message : e.message,
    });
  }
};

export { addTocardAction };
