import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
  const [loggedInUser] = useContext(UserContext);
  const {id} = useParams()
  console.log(id);
  const [orders, setOrders] = useState([])
  useEffect(()=> {
    fetch('http://localhost:4200/product/' + id)
    .then(res => res.json())
    .then(data => setOrders(data));
  }, [id])

  const handleCheckOut = () => {
    console.log("handleCheckOut");
    const orderDetails = {...loggedInUser, products: "savedCart", orderTime: new Date()}
      fetch('http://localhost:4200/order', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          alert('Your Order Submitted Successfully')
        }
      })
  }
  return (
    <div className="container mt-5 mx-auto">
      <h1>Checkout</h1>
      <Table striped bordered hover>
      <thead>
        <tr className="text-muted border-bottom">
          <th>Description</th>
          <th>Qauntity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{orders.name}</td>
          <td>{orders.quantity}</td>
          <td>{orders.price}</td>
        </tr>
      </tbody>
    </Table>
    <Button onClick={() => handleCheckOut()}>Checkout</Button>
    </div>
  );
};

export default CheckOut;