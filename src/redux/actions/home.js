import { globalAPI } from '../../api/api';

import {
  SET_ITEMS,
  SET_TOGGLE_LOADING,
  SET_TOTAL_SUM,
} from '../vars/vars';

export const setItems = (payload) => ({
  type: SET_ITEMS,
  payload,
});

export const setTotalSum = (payload) => ({
  type: SET_TOTAL_SUM,
  payload,
});

export const setToggleLoading = (payload) => ({
  type: SET_TOGGLE_LOADING,
  payload,
});

export const fetchItemsData = () => async (dispatch) => {
  const { data } = await globalAPI.getItems();
  dispatch(setItems(data));
};