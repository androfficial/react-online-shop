import { globalAPI } from "../../api/api";
import { actionTypes } from "./actionTypes";

import { setToggleLoading } from "./home";
import { fetchOrdersData } from "./orders";

export const setCartItems = (payload) => ({
  type: actionTypes.SET_CART_ITEMS,
  payload,
});

export const delCartItem = (payload) => ({
  type: actionTypes.DEL_CART_ITEM,
  payload,
});

export const itemIsRemoved = (payload) => ({
  type: actionTypes.ITEM_IS_REMOVED,
  payload,
});

export const setOrderStatus = (payload) => ({
  type: actionTypes.SET_ORDER_STATUS,
  payload,
});

export const getOrderId = (payload) => ({
  type: actionTypes.GET_ORDER_ID,
  payload,
});

export const fetchCartData = () => async (dispatch) => {
  const { data } = await globalAPI.getCartItems();
  dispatch(setCartItems(data));
};

export const setToCart = (items, obj) => async (dispatch) => {
  const findItem = items.find((item) => item.parentId === obj.parentId);
  if (findItem) {
    dispatch(setToggleLoading(true));
    const filteredCartItems = items.filter(
      (item) => item.parentId !== obj.parentId
    );
    await globalAPI.delCartItem(findItem);
    dispatch(setToggleLoading(false));
    dispatch(setCartItems(filteredCartItems));
  } else {
    dispatch(setToggleLoading(true));
    const { data } = await globalAPI.addCartItem(obj);
    const newCartItems = [...items, data];
    dispatch(setToggleLoading(false));
    dispatch(setCartItems(newCartItems));
  }
};

export const cartItemDel = (obj) => async (dispatch) => {
  dispatch(delCartItem(obj));
  await globalAPI.delCartItem(obj);
  dispatch(itemIsRemoved(false));
};

export const checkout = (items) => async (dispatch) => {
  dispatch(setOrderStatus(true));
  const { data } = await globalAPI.confirmOrder(items);
  dispatch(getOrderId(data.id));
  globalAPI.clearCart(items);

  dispatch(fetchOrdersData());
};