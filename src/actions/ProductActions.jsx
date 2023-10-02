import axiosBaseUri from "../utils/AxiosBaseUri";
import axios from "axios";
import {
  ON_FETCH_START_PRODUCT,
  ON_FETCH_START_SUCCESS,
} from "../constants/GetAllProductsConstant";
import {
  ON_FETCH_START_SINGLE_PRODUCT,
  ON_FETCH_START_SINGLE_SUCCESS,
} from "../constants/GetSingleProductByIdConstant";
import axiosErrorHandler from "../utils/AxiosErrorHandler";

const products = axiosBaseUri("https://dummyjson.com");
const getAllProductsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ON_FETCH_START_PRODUCT,
    });

    const allProducts = await products.get("/products");

    dispatch({
      type: ON_FETCH_START_SUCCESS,
      payload: allProducts,
    });
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};

const getSingleProductByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ON_FETCH_START_SINGLE_PRODUCT,
    });

    const singleProduct = await products.get(`/products/${id}`);

    dispatch({
      type: ON_FETCH_START_SINGLE_SUCCESS,
      payload: singleProduct,
    });
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};
export { getAllProductsAction, getSingleProductByIdAction };
