import { CLEAR_INPUT_FIELD, SET_SEARCH_VALUE } from "../vars/vars";

let initialState = {
  value: '',
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        value: action.payload,
      };
    case CLEAR_INPUT_FIELD:
      return {
        ...state,
        value: '',
      };
    default:
      return state;
  }
};

export default search;