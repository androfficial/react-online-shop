import { globalAPI } from '../../api/api';

export const Types = {
  SET_ORDERS: 'ORDERS@ORDERS:ADD_TO_ORDERS',
};

const Actions = {
  setOrders: (payload) => ({
    type: Types.SET_ORDERS,
    payload,
  }),
  fetchOrdersData: () => async (dispatch) => {
    const { data } = await globalAPI.getOrders();
    dispatch(Actions.setOrders(data));
  },
}

export default Actions;