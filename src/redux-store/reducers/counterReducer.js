import { ActionType } from "../action-types";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        value: state.value + action.payload.value,
      };
    case ActionType.DECREMENT:
      return {
        value: state.value - 1,
      };
    case ActionType.RESET:
      return {
        value: 0,
      };
    default:
      return state;
  }
};

export default reducer;
