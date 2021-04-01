import React, { useEffect, useState } from 'react';
import { Table} from 'react-bootstrap';
import InventoryProductDetails from '../InventoryProductDetails/InventoryProductDetails';

const ManageProduct = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4200/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [])

  return (
    <>
    <div>
      <h1 className="text-left">Manage Product</h1>
    </div>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr className="text-muted">
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
            products.map(product => <InventoryProductDetails product={product} key={product._id} />)
          }
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default ManageProduct;