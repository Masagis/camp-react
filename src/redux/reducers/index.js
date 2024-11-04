/* eslint-disable radix */
/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */
import { types } from "../actions/index";

const globalState = {
  number: 0,
};

const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case types.PLUS:
      return {
        ...state,
        number: state.number + 1,
      };
    case types.MINUS:
      return {
        ...state,
        number: state.number - 1,
      };
    case types.RESET:
      return {
        ...state,
        number: 0,
      };
    default:
      return state;
  }
};

export default rootReducer;
