import {
  SET_CART_ITEMS,
  SET_ORDER_STATUS,
  DEL_CART_ITEM,
  ITEM_IS_REMOVED,
  GET_ORDER_ID,
} from "../vars/vars";

let initialState = {
  cartItems: [],
  itemIsRemoved: false,
  orderInProcessed: false,
  orderId: null,
  inOrderPlaced: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case DEL_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.parentId !== action.payload.parentId
        ),
        itemIsRemoved: true,
      };
    case ITEM_IS_REMOVED:
      return {
        ...state,
        itemIsRemoved: false,
      };
    case SET_ORDER_STATUS:
      return {
        ...state,
        orderInProcessed: true,
      };
    case GET_ORDER_ID:
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