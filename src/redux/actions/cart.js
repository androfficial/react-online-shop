import { globalAPI } from "../../api/api";

import { SET_CART_ITEMS, GET_ORDER_ID } from "../vars/vars";

import { setToggleLoading } from "./home";
import { fetchOrdersData } from "./orders";

export const setCartItems = (payload) => ({
  type: SET_CART_ITEMS,
  payload,
});

export const getOrderId = (payload) => ({
  type: GET_ORDER_ID,
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

export const cartItemDel = (items, obj) => async (dispatch) => {
  const newCartItems = items.filter((item) => item.parentId !== obj.parentId);
  await globalAPI.delCartItem(obj);
  dispatch(setCartItems(newCartItems));
};

export const checkout = (items) => async (dispatch) => {
  dispatch(setToggleLoading(true));
  const orderData = await globalAPI.confirmOrder(items);
  dispatch(getOrderId(orderData.data.id));
  dispatch(setToggleLoading(false));
  globalAPI.clearCart(items);

  dispatch(fetchOrdersData());
};