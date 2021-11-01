import { globalAPI } from '../../api/api';

export const Types = {
  SET_ITEMS: 'HOME@ITEMS:ADD_TO_ITEMS',
  SET_TOGGLE_LOADING: 'HOME@SET:TOGGLE_LOADING',
  SET_CURRENT_PAGE: 'HOME@SET:CURRENT_PAGE',
};

const Actions = {
  setItems: (payload) => ({
    type: Types.SET_ITEMS,
    payload,
  }),
  setToggleLoading: (payload) => ({
    type: Types.SET_TOGGLE_LOADING,
    payload,
  }),
  setCurrentPage: (payload) => ({
    type: Types.SET_CURRENT_PAGE,
    payload,
  }),
  fetchItemsData: () => async (dispatch) => {
    const { data } = await globalAPI.getItems();
    dispatch(Actions.setItems(data));
  },
  fetchNewItems: (page) => async (dispatch) => {
    dispatch(Actions.setCurrentPage(page));
    // const { data } = await globalAPI.getNewItems(page);
    // dispatch(Actions.setItems(data));
  },
}

export default Actions;