import {
  SET_ITEMS,
  SET_TOTAL_SUM,
  SET_TOGGLE_LOADING,
} from '../vars/vars';

let initialState = {
  items: [],
  totalPrice: 0,
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
    case SET_TOTAL_SUM:
      return {
        ...state,
        totalPrice: action.payload,
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