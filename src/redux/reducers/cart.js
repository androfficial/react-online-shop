import { Types } from '../actions/cart';

const initialState = {
  cartItems: [],
  orderId: null,
  errorApi: false,
};

const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case Types.DEL_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.parentId !== action.payload.parentId
        ),
      };
    case Types.GET_ORDER_ID:
      return {
        ...state,
        cartItems: [],
        orderId: action.payload,
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

export default cart;
