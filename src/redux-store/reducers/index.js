import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import countriesReducer from "./countriesReducer";

const reducers = combineReducers({
  counter: counterReducer,
  countries: countriesReducer,
});

export default reducers;
