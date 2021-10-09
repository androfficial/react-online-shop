import { Types } from "../actions/favorites";

let initialState = {
  favoritesItems: [],
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_FAVORITES:
      return {
        ...state,
        favoritesItems: action.payload,
      };
    default:
      return state;
  }
};

export default favorites;