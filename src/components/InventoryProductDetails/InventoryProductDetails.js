import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const InventoryProductDetails = (props) => {
  const { _id, name, price, quantity } = props?.product;
  const [productDelete, setProductDelete] = useState(false);


  const handleProductDelete = (id) => {
    fetch(`https://happy-mart-database.herokuapp.com/deleteProduct/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          setProductDelete(true);
        }
      })
  }

  return (
    <>{!productDelete &&
      <tr>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td><Button>Add</Button> <Button onClick={() => handleProductDelete(_id)}>Delete</Button></td>
      </tr>}
    </>
  );
};

export default InventoryProductDetails;