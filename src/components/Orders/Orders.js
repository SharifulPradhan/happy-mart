import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Order from '../Order/Order';

const Orders = () => {
  const [loggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://happy-mart-database.herokuapp.com/orders?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      });
  }, [loggedInUser.email])

  return (
    <div style={{ height: "100%" }} className="text-center m-5 p-5">
      <div className="container">
        <h1 style={{ color: 'steelblue' }}> My Orders </h1>
        <p><span style={{ color: 'steelblue' }}>Name:</span> {loggedInUser.name}</p>
        <p><span style={{ color: 'steelblue' }}>Email:</span> {loggedInUser.email}</p>
      </div>
      {
        loading
          ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
          : <div className="container mt-5">
            <Table striped bordered hover>
              <thead>
                <tr className="text-muted">
                  <th>Description</th>
                  <th>Price</th>
                  <th>Order Placed On</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map(order => <Order order={order} key={order._id}></Order>)
                }
              </tbody>
            </Table>
          </div>
      }
    </div>
  );
};

export default Orders;