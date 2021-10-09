import { Types } from "../actions/search";

let initialState = {
  value: '',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case Types.CLEAR_INPUT_FIELD:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};

export default search;