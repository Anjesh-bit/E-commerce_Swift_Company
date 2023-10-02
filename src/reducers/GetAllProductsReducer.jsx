import {
  ON_FETCH_START_FAILED,
  ON_FETCH_START_PRODUCT,
  ON_FETCH_START_SUCCESS,
} from "../constants/GetAllProductsConstant";
import {
  ON_FETCH_START_SINGLE_FAILED,
  ON_FETCH_START_SINGLE_PRODUCT,
  ON_FETCH_START_SINGLE_SUCCESS,
} from "../constants/GetSingleProductByIdConstant";

import {
  FUZY_404_NOT_FOUND,
  FUZY_BAD_REQUEST,
  FUZY_INTERNAL_SERVER_ERROR,
  FUZY_NETWORK_ERROR,
  FUZY_OTHER_ERROR,
  FUZY_UNAUTHORIZED_ERROR,
  FUZY_UNKNOWN_ERROR,
} from "../constants/StatusCodeError";

const getAllProductsReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_FETCH_START_PRODUCT:
      return { ...state, loading: false };

    case ON_FETCH_START_SUCCESS:
      return { ...state, allProducts: action.payload, loading: true };

    case ON_FETCH_START_FAILED:
      return { ...state, loading: false, allProducts: "" };

    case FUZY_404_NOT_FOUND:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_BAD_REQUEST:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_INTERNAL_SERVER_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_NETWORK_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_OTHER_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_UNAUTHORIZED_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_UNKNOWN_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    default:
      return { ...state };
  }
};

const getSingleProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_FETCH_START_SINGLE_PRODUCT:
      return { ...state, loading: false };

    case ON_FETCH_START_SINGLE_SUCCESS:
      return { ...state, singleProduct: action.payload, loading: true };

    case ON_FETCH_START_SINGLE_FAILED:
      return { ...state, loading: false, singleProduct: "" };

    case FUZY_404_NOT_FOUND:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_BAD_REQUEST:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_INTERNAL_SERVER_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_NETWORK_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_OTHER_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_UNAUTHORIZED_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    case FUZY_UNKNOWN_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };

    default:
      return { ...state };
  }
};
export { getAllProductsReducer, getSingleProductReducer };
