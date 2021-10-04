import { SET_ORDERS } from "../vars/vars";

let initialState = {
  orders: [],
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default orders;