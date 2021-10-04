import { globalAPI } from "../../api/api";

import { SET_ORDERS } from "../vars/vars";

export const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload,
});

export const fetchOrdersData = () => async (dispatch) => {
  const { data } = await globalAPI.getOrders();
  const ordersItems = data.reduce((prev, obj) => [...prev, ...obj.items], []);
  dispatch(setOrders(ordersItems));
};