import { actionTypes } from "../actions/actionTypes";

let initialState = {
  orders: [],
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ORDERS: {
      const ordersItems = action.payload.reduce((prev, obj) => [...prev, ...obj.items], []);
      return {
        ...state,
        orders: ordersItems,
      };
    }
    default:
      return state;
  }
};

export default orders;