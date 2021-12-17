import { Types } from '../actions/orders';

const initialState = {
  orders: [],
  errorApi: false,
};

const orders = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.SET_ORDERS: {
      const ordersItems = action.payload.reduce(
        (prev, obj) => [...prev, ...obj.items],
        []
      );

      return {
        ...state,
        orders: ordersItems,
      };
    }
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default orders;
