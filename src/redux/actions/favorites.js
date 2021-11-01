import { globalAPI } from '../../api/api';

export const Types = {
  SET_FAVORITES: 'FAVORITES@ITEMS:ADD_TO_FAVORITES',
};

const Actions = {
  setFavorites: (payload) => ({
    type: Types.SET_FAVORITES,
    payload,
  }),
  fetchFavoritesData: () => async (dispatch) => {
    const { data } = await globalAPI.getFavoriteItems();
    dispatch(Actions.setFavorites(data));
  },
  setToFavorites: (items, obj) => async (dispatch) => {
    const findFavElemParentId = items.find((item) => item.parentId === obj.parentId);
    if (findFavElemParentId) {
      const newFavItems = items.filter((item) => item.parentId !== obj.parentId);
      await globalAPI.delFavoriteItem(findFavElemParentId);
      dispatch(Actions.setFavorites(newFavItems));
    } else {
      const { data } = await globalAPI.addFavoriteItem(obj);
      const changeFavItems = [...items, data];
      dispatch(Actions.setFavorites(changeFavItems));
    }
  },
};

export default Actions;