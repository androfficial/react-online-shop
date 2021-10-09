import { globalAPI } from '../../api/api';

export const Types = {
  SET_ITEMS: 'HOME@SET_ITEMS',
  SET_TOGGLE_LOADING: 'HOME@SET_TOGGLE_LOADING',
};

export const setItems = (payload) => ({
  type: Types.SET_ITEMS,
  payload,
});

export const setToggleLoading = (payload) => ({
  type: Types.SET_TOGGLE_LOADING,
  payload,
});

export const fetchItemsData = () => async (dispatch) => {
  const { data } = await globalAPI.getItems();
  dispatch(setItems(data));
};