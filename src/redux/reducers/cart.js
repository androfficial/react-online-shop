import { Types } from '../actions/cart';

let initialState = {
  cartItems: [],
  itemIsRemoved: false,
  orderInProcessed: false,
  orderId: null,
  inOrderPlaced: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case Types.DEL_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.parentId !== action.payload.parentId),
        itemIsRemoved: true,
      };
    case Types.ITEM_IS_REMOVED:
      return {
        ...state,
        itemIsRemoved: false,
      };
    case Types.SET_ORDER_STATUS:
      return {
        ...state,
        orderInProcessed: true,
      };
    case Types.GET_ORDER_ID:
      return {
        ...state,
        cartItems: [],
        orderId: action.payload,
        orderInProcessed: false,
        inOrderPlaced: true,
      };
    default:
      return state;
  }
};

export default cart;