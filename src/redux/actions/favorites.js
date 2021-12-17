import globalAPI from '@api/api';

export const Types = {
  SET_FAVORITES: 'FAVORITES@ITEMS:ADD_TO_FAVORITES',
  SET_ERROR_API: 'FAVORITES@SET:ERROR_API',
};

const Actions = {
  setFavorites: (payload) => ({
    type: Types.SET_FAVORITES,
    payload,
  }),
  setErrorApi: (payload) => ({
    type: Types.SET_ERROR_API,
    payload,
  }),
  fetchFavoritesData: () => async (dispatch) => {
    const data = await globalAPI.getFavoriteItems();
    if (data) {
      dispatch(Actions.setFavorites(data));
    } else {
      dispatch(Actions.setErrorApi(true));
    }
  },
  setToFavorites: (items, obj) => async (dispatch) => {
    const findFavElemParentId = items.find(
      (item) => item.parentId === obj.parentId
    );
    if (findFavElemParentId) {
      const newFavItems = items.filter(
        (item) => item.parentId !== obj.parentId
      );
      await globalAPI.delFavoriteItem(findFavElemParentId);
      dispatch(Actions.setFavorites(newFavItems));
    } else {
      const data = await globalAPI.addFavoriteItem(obj);
      if (data) {
        const changeFavItems = [...items, data];
        dispatch(Actions.setFavorites(changeFavItems));
      } else {
        dispatch(Actions.setErrorApi(true));
      }
    }
  },
};

export default Actions;
