import globalAPI from '@api/api';

export const Types = {
  SET_ITEMS: 'HOME@ITEMS:ADD_TO_ITEMS',
  SET_CURRENT_PAGE: 'HOME@SET:CURRENT_PAGE',
  SET_IS_LOADED: 'HOME@SET:IS_LOADED',
  SET_ERROR_API: 'HOME@SET:ERROR_API',
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
  setErrorApi: (payload) => ({
    type: Types.SET_ERROR_API,
    payload,
  }),
  fetchItemsData: () => async (dispatch) => {
    const data = await globalAPI.getItems();
    if (data) {
      dispatch(Actions.setItems(data));
    } else {
      dispatch(Actions.setErrorApi(true));
    }
  },
  fetchNewItems: (page) => async (dispatch) => {
    dispatch(Actions.setIsLoaded(false));
    dispatch(Actions.setCurrentPage(page));
    const data = await globalAPI.getItems(page);
    if (data) {
      dispatch(Actions.setItems(data));
    } else {
      dispatch(Actions.setErrorApi(true));
    }
  },
};

export default Actions;
