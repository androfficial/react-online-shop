import { globalAPI } from '../../api/api';

export const Types = {
  SET_ITEMS: 'HOME@ITEMS:ADD_TO_ITEMS',
  SET_TOGGLE_LOADING: 'HOME@SET:TOGGLE_LOADING',
  SET_CURRENT_PAGE: 'HOME@SET:CURRENT_PAGE',
  SET_IS_LOADED: 'HOME@SET:IS_LOADED',
};

const Actions = {
  setItems: (payload) => ({
    type: Types.SET_ITEMS,
    payload,
  }),
  setCurrentPage: (payload) => ({
    type: Types.SET_CURRENT_PAGE,
    payload,
  }),
  setIsLoaded: (payload) => ({
    type: Types.SET_IS_LOADED,
    payload,
  }),
  fetchItemsData: () => async (dispatch) => {
    const { data } = await globalAPI.getItems();
    dispatch(Actions.setItems(data));
  },
  fetchNewItems: (page) => async (dispatch) => {
    dispatch(Actions.setIsLoaded(false));
    dispatch(Actions.setCurrentPage(page));
    const { data } = await globalAPI.getItems(page);
    dispatch(Actions.setItems(data));
  },
}

export default Actions;