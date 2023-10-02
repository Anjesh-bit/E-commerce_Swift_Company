import {
  FUZY_404_NOT_FOUND,
  FUZY_BAD_REQUEST,
  FUZY_INTERNAL_SERVER_ERROR,
  FUZY_NETWORK_ERROR,
  FUZY_OTHER_ERROR,
  FUZY_UNAUTHORIZED_ERROR,
  FUZY_UNKNOWN_ERROR,
} from "../constants/StatusCodeError";

const axiosErrorHandler = (dispatch, error) => {
  if (error.response) {
    const codeStatus = error.response.status;
    switch (codeStatus) {
      case 404:
        dispatch({
          type: FUZY_404_NOT_FOUND,
          payload: "The requested data was not found(404 Error)",
        });
        break;
      case 400:
        dispatch({
          type: FUZY_BAD_REQUEST,
          payload: "The input feilds are invalid",
        });
        break;
      case 401:
        dispatch({
          type: FUZY_UNAUTHORIZED_ERROR,
          paylaod: "The unauthorized aceess to the resources(Access denied",
        });
        break;
      case 500:
        dispatch({
          type: FUZY_INTERNAL_SERVER_ERROR,
          payload: "There was an internal server error",
        });
        break;
      default:
        dispatch({
          type: FUZY_UNKNOWN_ERROR,
          payload: "There was an unexpected unknown error",
        });
    }
  }
  //request made but response was not received
  else if (error.request) {
    dispatch({
      type: FUZY_NETWORK_ERROR,
      payload: "There was a network error",
    });
  } else {
    dispatch({
      type: FUZY_OTHER_ERROR,
      payload: error.message,
    });
  }
};

export default axiosErrorHandler;
