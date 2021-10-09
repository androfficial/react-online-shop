import { actionTypes } from "../actions/actionTypes";

let initialState = {
  cartItems: [],
  itemIsRemoved: false,
  orderInProcessed: false,
  orderId: null,
  inOrderPlaced: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case actionTypes.DEL_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.parentId !== action.payload.parentId
        ),
        itemIsRemoved: true,
      };
    case actionTypes.ITEM_IS_REMOVED:
      return {
        ...state,
        itemIsRemoved: false,
      };
    case actionTypes.SET_ORDER_STATUS:
      return {
        ...state,
        orderInProcessed: true,
      };
    case actionTypes.GET_ORDER_ID:
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