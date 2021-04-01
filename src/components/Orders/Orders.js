import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {
  const [loggedInUser] = useContext(UserContext);


  return (
    <div style={{ height: "100%" }} className="text-center m-5 p-5">
      <div className="container">
        <h1> Your Orders</h1>
        <h4>Orders of: {loggedInUser.name}</h4>
        <h4>Email: {loggedInUser.email}</h4>
      </div>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr className="text-muted">
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ha</td>
              <td>pa</td>
              <td>la</td>
            </tr>
          </tbody>
        </Table>

      </div>
    </div>
  );
};

export default Orders;