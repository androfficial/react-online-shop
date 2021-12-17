import globalAPI from '@api/api';

export const Types = {
  SET_ORDERS: 'ORDERS@ORDERS:ADD_TO_ORDERS',
  SET_ERROR_API: 'ORDERS@SET:ERROR_API',
};

const Actions = {
  setOrders: (payload) => ({
    type: Types.SET_ORDERS,
    payload,
  }),
  setErrorApi: (payload) => ({
    type: Types.SET_ERROR_API,
    payload,
  }),
  fetchOrdersData: () => async (dispatch) => {
    const data = await globalAPI.getOrders();
    if (data) {
      dispatch(Actions.setOrders(data));
    } else {
      dispatch(Actions.setErrorApi(true));
    }
  },
};

export default Actions;
