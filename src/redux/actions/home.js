import { globalAPI } from '../../api/api';

import { actionTypes } from "./actionTypes";

export const setItems = (payload) => ({
  type: actionTypes.SET_ITEMS,
  payload,
});

export const setToggleLoading = (payload) => ({
  type: actionTypes.SET_TOGGLE_LOADING,
  payload,
});

export const fetchItemsData = () => async (dispatch) => {
  const { data } = await globalAPI.getItems();
  dispatch(setItems(data));
};