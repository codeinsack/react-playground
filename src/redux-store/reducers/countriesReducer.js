import { ActionType } from "../action-types";

const initialState = {
  list: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_COUNTRIES_START:
      return {
        list: [],
        loading: true,
      };
    case ActionType.FETCH_COUNTRIES_COMPLETE:
      return {
        list: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
