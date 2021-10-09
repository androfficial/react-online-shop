import { actionTypes } from "../actions/actionTypes";

let initialState = {
  favoritesItems: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_FAVORITES:
      return {
        ...state,
        favoritesItems: action.payload,
      };
    default:
      return state;
  }
};

export default favorites;