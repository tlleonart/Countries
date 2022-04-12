import { combineReducers } from "redux";
import detailReducer from "./detail";
import countriesReducer from "./countries";

export default combineReducers({
  detailReducer,
  countriesReducer,
});
