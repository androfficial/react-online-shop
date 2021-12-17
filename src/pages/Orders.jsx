/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { Product, Empty } from '@components';

const Orders = ({ history }) => {
  const allOrders = useSelector(({ orders }) => orders.orders);
  return allOrders.length > 0 ? (
    <section className='orders'>
      <div className='orders__top'>
        <h1 className='orders__title _title'>Мои заказы</h1>
      </div>
      <div className='orders__items items-grid'>
        {allOrders.map((obj, index) => (
          <Product {...obj} key={index} />
        ))}
      </div>
    </section>
  ) : (
    <Empty
      imageUrl='images/orders/sad.png'
      title='У вас нет заказов'
      text='Оформите хотя бы один заказ.'
      history={history}
    />
  );
};

Orders.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Orders;
