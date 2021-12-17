import globalAPI from '@api/api';

import { ordersActions } from '.';

export const Types = {
  SET_CART_ITEMS: 'CART@ITEMS:ADD_TO_CART',
  DEL_CART_ITEM: 'CART@ITEMS:DEL_CART_ITEM',
  GET_ORDER_ID: 'CART@GET:ORDER_ID',
  SET_ERROR_API: 'CART@SET:ERROR_API',
};

const Actions = {
  setCartItems: (payload) => ({
    type: Types.SET_CART_ITEMS,
    payload,
  }),
  delCartItem: (payload) => ({
    type: Types.DEL_CART_ITEM,
    payload,
  }),
  getOrderId: (payload) => ({
    type: Types.GET_ORDER_ID,
    payload,
  }),
  setErrorApi: (payload) => ({
    type: Types.SET_ERROR_API,
    payload,
  }),
  fetchCartData: () => async (dispatch) => {
    const data = await globalAPI.getCartItems();
    if (data) {
      dispatch(Actions.setCartItems(data));
    } else {
      dispatch(Actions.setErrorApi(true));
    }
  },
  setToCart: (items, obj) => async (dispatch) => {
    const findItem = items.find((item) => item.parentId === obj.parentId);
    if (findItem) {
      const filteredCartItems = items.filter(
        (item) => item.parentId !== obj.parentId
      );
      await globalAPI.delCartItem(findItem);
      dispatch(Actions.setCartItems(filteredCartItems));
    } else {
      const data = await globalAPI.addCartItem(obj);
      if (data) {
        const newCartItems = [...items, data];
        dispatch(Actions.setCartItems(newCartItems));
      } else {
        dispatch(Actions.setErrorApi(true));
      }
    }
  },
  cartItemDel: (obj) => async (dispatch) => {
    dispatch(Actions.delCartItem(obj));
    await globalAPI.delCartItem(obj);
  },
  checkout: (items) => async (dispatch) => {
    const data = await globalAPI.confirmOrder(items);
    if (data) {
      dispatch(Actions.getOrderId(data.id));
      globalAPI.clearCart(items);
      dispatch(ordersActions.fetchOrdersData());
    } else {
      dispatch(Actions.setErrorApi(true));
    }
  },
};

export default Actions;
