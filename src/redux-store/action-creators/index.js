import { ActionType } from "../action-types";
import axios from "axios";

export const increment = (value) => ({
  type: ActionType.INCREMENT,
  payload: {
    value,
  },
});

export const decrement = () => ({
  type: ActionType.DECREMENT,
});

export const reset = () => ({
  type: ActionType.RESET,
});

export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.FETCH_COUNTRIES_START,
    });

    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    dispatch({
      type: ActionType.FETCH_COUNTRIES_COMPLETE,
      payload: data,
    });
  };
};

export const getEntries = () => ({
  type: ActionType.GET_ENTRIES,
});

export const populateEntries = (entries) => ({
  type: ActionType.POPULATE_ENTRIES,
  payload: entries,
});
