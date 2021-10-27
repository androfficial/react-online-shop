import { globalAPI } from '../../api/api';

import { homeActions, ordersActions } from '.';

export const Types = {
  SET_CART_ITEMS: 'CART@ITEMS:ADD_TO_CART',
  DEL_CART_ITEM: 'CART@ITEMS:DEL_CART_ITEM',
  ITEM_IS_REMOVED: 'CART@ITEMS:ITEM_IS_REMOVED',
  SET_ORDER_STATUS: 'CART@SET:ORDER_STATUS',
  GET_ORDER_ID: 'CART@GET:ORDER_ID',
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
  itemIsRemoved: (payload) => ({
    type: Types.ITEM_IS_REMOVED,
    payload,
  }),
  setOrderStatus: (payload) => ({
    type: Types.SET_ORDER_STATUS,
    payload,
  }),
  getOrderId: (payload) => ({
    type: Types.GET_ORDER_ID,
    payload,
  }),
  fetchCartData: () => async (dispatch) => {
    const { data } = await globalAPI.getCartItems();
    dispatch(Actions.setCartItems(data));
  },
  setToCart: (items, obj) => async (dispatch) => {
    const findItem = items.find((item) => item.parentId === obj.parentId);
    if (findItem) {
      dispatch(homeActions.setToggleLoading(true));

      const filteredCartItems = items.filter((item) => item.parentId !== obj.parentId);
      await globalAPI.delCartItem(findItem);

      dispatch(homeActions.setToggleLoading(false));
      dispatch(Actions.setCartItems(filteredCartItems));
    } else {
      dispatch(homeActions.setToggleLoading(true));

      const { data } = await globalAPI.addCartItem(obj);
      const newCartItems = [...items, data];

      dispatch(homeActions.setToggleLoading(false));
      dispatch(Actions.setCartItems(newCartItems));
    }
  },
  cartItemDel: (obj) => async (dispatch) => {
    dispatch(Actions.delCartItem(obj));
    await globalAPI.delCartItem(obj);

    dispatch(Actions.itemIsRemoved(false));
  },
  checkout: (items) => async (dispatch) => {
    dispatch(Actions.setOrderStatus(true));
    const { data } = await globalAPI.confirmOrder(items);

    dispatch(Actions.getOrderId(data.id));
    globalAPI.clearCart(items);

    dispatch(ordersActions.fetchOrdersData());
  },
};

export default Actions;
