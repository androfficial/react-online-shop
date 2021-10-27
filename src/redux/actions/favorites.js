import { globalAPI } from '../../api/api';

import { homeActions } from '.';

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
      dispatch(homeActions.setToggleLoading(true));
      const newFavItems = items.filter((item) => item.parentId !== obj.parentId);

      await globalAPI.delFavoriteItem(findFavElemParentId);

      dispatch(homeActions.setToggleLoading(false));
      dispatch(Actions.setFavorites(newFavItems));
    } else {
      dispatch(homeActions.setToggleLoading(true));
      const { data } = await globalAPI.addFavoriteItem(obj);

      dispatch(homeActions.setToggleLoading(false));
      
      const changeFavItems = [...items, data];
      dispatch(Actions.setFavorites(changeFavItems));
    }
  },
};

export default Actions;