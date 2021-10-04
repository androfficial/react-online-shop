import { globalAPI } from "../../api/api";

import { SET_FAVORITES } from "../vars/vars";

import { setToggleLoading } from "./home";

export const setFavorites = (payload) => ({
  type: SET_FAVORITES,
  payload,
});

export const fetchFavotiresData = () => async (dispatch) => {
  const { data } = await globalAPI.getFavoriteItems();
  dispatch(setFavorites(data));
};

export const setToFavorites = (items, obj) => async (dispatch) => {
  const findFavElemParentId = items.find(
    (item) => item.parentId === obj.parentId
  );
  if (findFavElemParentId) {
    dispatch(setToggleLoading(true));
    const newFavItems = items.filter((item) => item.parentId !== obj.parentId);
    await globalAPI.delFavoriteItem(findFavElemParentId);
    dispatch(setToggleLoading(false));
    dispatch(setFavorites(newFavItems));
  } else {
    dispatch(setToggleLoading(true));
    const { data } = await globalAPI.addFavoriteItem(obj);
    dispatch(setToggleLoading(false));
    const changeFavItems = [...items, data];
    dispatch(setFavorites(changeFavItems));
  }
};