import { Types } from '../actions/home';

let initialState = {
  items: [],
  isProcessed: false,
  isLoaded: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case Types.SET_TOGGLE_LOADING:
      return {
        ...state,
        isProcessed: action.payload,
      };
    default:
      return state;
  }
};

export default home;