import { Types } from '../actions/home';

const initialState = {
  items: [],
  itemsTotalCount: 100,
  pageSize: 12,
  currentPage: 1,
  isLoaded: false,
  errorApi: false,
};

const home = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case Types.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
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

export default home;
