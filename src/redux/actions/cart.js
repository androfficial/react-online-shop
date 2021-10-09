import { globalAPI } from "../../api/api";

import { setToggleLoading } from "./home";
import { fetchOrdersData } from "./orders";

export const Types = {
  SET_CART_ITEMS: 'CART@SET_CART_ITEMS',
  DEL_CART_ITEM: 'CART@DEL_CART_ITEM',
  ITEM_IS_REMOVED: 'CART@ITEM_IS_REMOVED',
  SET_ORDER_STATUS: 'CART@SET_ORDER_STATUS',
  GET_ORDER_ID: 'CART@GET_ORDER_ID',
};

export const setCartItems = (payload) => ({
  type: Types.SET_CART_ITEMS,
  payload,
});

export const delCartItem = (payload) => ({
  type: Types.DEL_CART_ITEM,
  payload,
});

export const itemIsRemoved = (payload) => ({
  type: Types.ITEM_IS_REMOVED,
  payload,
});

export const setOrderStatus = (payload) => ({
  type: Types.SET_ORDER_STATUS,
  payload,
});

export const getOrderId = (payload) => ({
  type: Types.GET_ORDER_ID,
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