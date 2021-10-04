import { SET_FAVORITES } from "../vars/vars";

let initialState = {
  favoritesItems: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {
        ...state,
        favoritesItems: action.payload,
      };
    default:
      return state;
  }
};

export default favorites;