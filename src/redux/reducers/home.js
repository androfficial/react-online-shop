import { actionTypes } from "../actions/actionTypes";

let initialState = {
  items: [],
  isProcessed: false,
  isLoaded: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case actionTypes.SET_TOGGLE_LOADING:
      return {
        ...state,
        isProcessed: action.payload,
      };
    default:
      return state;
  }
};

export default home;