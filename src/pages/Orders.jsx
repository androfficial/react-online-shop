import React from "react";

import Product from "../components/Product";
import Empty from "../components/Empty";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector(({ orders }) => orders.orders);
  return (
    <>
      {orders.length > 0 ? (
        <section className="orders">
          <div className="orders__top">
            <h1 className="orders__title _title">Мои заказы</h1>
          </div>
          <div className="orders__items items-grid">
            {orders.map((obj, index) => (
              <Product {...obj} key={index} />
            ))}
          </div>
        </section>
      ) : (
        <Empty
          imageUrl="images/orders/sad.png"
          title="У вас нет заказов"
          text="Оформите хотя бы один заказ."
        />
      )}
    </>
  );
};

export default Orders;