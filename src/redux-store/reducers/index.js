import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import countriesReducer from "./countriesReducer";
import entriesReducer from "./entriesReducer";

const reducers = combineReducers({
  counter: counterReducer,
  countries: countriesReducer,
  entries: entriesReducer,
});

export default reducers;
