import { globalAPI } from '../../api/api';

export const Types = {
  SET_ITEMS: 'HOME@ITEMS:ADD_TO_ITEMS',
  SET_TOGGLE_LOADING: 'HOME@SET:TOGGLE_LOADING',
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
  fetchItemsData: () => async (dispatch) => {
    const { data } = await globalAPI.getItems();
    dispatch(Actions.setItems(data));
  },
}

export default Actions;