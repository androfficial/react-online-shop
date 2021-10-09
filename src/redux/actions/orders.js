import { globalAPI } from "../../api/api";

export const Types = {
  SET_ORDERS: 'ORDERS@SET_ORDERS',
};

export const setOrders = (payload) => ({
  type: Types.SET_ORDERS,
  payload,
});

export const fetchOrdersData = () => async (dispatch) => {
  const { data } = await globalAPI.getOrders();
  dispatch(setOrders(data));
};