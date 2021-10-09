import { actionTypes } from "../actions/actionTypes";

let initialState = {
  value: '',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case actionTypes.CLEAR_INPUT_FIELD:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};

export default search;