import { Types } from '../actions/favorites';

const initialState = {
  favoritesItems: [],
  errorApi: false,
};

const favorites = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_FAVORITES:
      return {
        ...state,
        favoritesItems: action.payload,
      };
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default favorites;
