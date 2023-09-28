import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//combine all the reducres at once
const reducers = combineReducers({
  
});

// initial state for the Store when component mounts
const initialState = {
 
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
