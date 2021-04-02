import React, { useContext, useEffect, useState } from 'react';
import { Table, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
  const [loggedInUser] = useContext(UserContext);
  const { id } = useParams()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://happy-mart-database.herokuapp.com/product/' + id)
      .then(res => res.json())
      .then(data => {
        setOrders(data)
        setLoading(false)
      });
  }, [id])

  const handleCheckOut = () => {
    console.log("handleCheckOut");
    const orderDetails = { ...loggedInUser, product: orders, orderTime: new Date() }
    fetch('https://happy-mart-database.herokuapp.com/checkOut', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Your Order Submitted Successfully')
        }
      })
  }
  return (
    <>
      {
        loading
          ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
          : <div className="container mt-5 mx-auto">
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
                  <td>1</td>
                  <td>{orders.price}</td>
                </tr>
              </tbody>
            </Table>
            <Button onClick={() => handleCheckOut()}>Checkout</Button>
          </div>
      }
    </>
  );
};

export default CheckOut;