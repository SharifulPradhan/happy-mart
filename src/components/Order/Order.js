import React from 'react';

const Order = ({order}) => {
  const {name, price} = order.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{new Date(order.orderTime).toString()}</td>
    </tr>
  );
};

export default Order;