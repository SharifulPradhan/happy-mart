import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faWindowClose} from '@fortawesome/free-solid-svg-icons';


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
        <td><Button variant="success"><FontAwesomeIcon icon={faPenSquare} /></Button> <Button variant="danger" onClick={() => handleProductDelete(_id)}><FontAwesomeIcon icon={faWindowClose} /></Button></td>
      </tr>}
    </>
  );
};

export default InventoryProductDetails;