import { SET_CART_ITEMS, GET_ORDER_ID } from "../vars/vars";

let initialState = {
  cartItems: [],
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
    case GET_ORDER_ID:
      return {
        ...state,
        cartItems: [],
        orderId: action.payload,
        inOrderPlaced: true,
      };
    default:
      return state;
  }
};

export default cart;