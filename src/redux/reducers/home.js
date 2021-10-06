import { SET_ITEMS, SET_TOGGLE_LOADING } from "../vars/vars";

let initialState = {
  items: [],
  isProcessed: false,
  isLoaded: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case SET_TOGGLE_LOADING:
      return {
        ...state,
        isProcessed: action.payload,
      };
    default:
      return state;
  }
};

export default home;