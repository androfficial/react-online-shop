import { globalAPI } from "../../api/api";

import { actionTypes } from "./actionTypes";

export const setOrders = (payload) => ({
  type: actionTypes.SET_ORDERS,
  payload,
});

export const fetchOrdersData = () => async (dispatch) => {
  const { data } = await globalAPI.getOrders();
  dispatch(setOrders(data));
};