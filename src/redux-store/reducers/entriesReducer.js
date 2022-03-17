import { ActionType } from "../action-types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.POPULATE_ENTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
