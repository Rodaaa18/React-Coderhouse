import { combineReducers } from "redux";
import productReducer from "./productReducer.js";

const rootReducer = combineReducers({
  productStates: productReducer,
});

export default rootReducer;