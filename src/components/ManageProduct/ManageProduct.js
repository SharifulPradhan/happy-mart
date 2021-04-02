import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import InventoryProductDetails from '../InventoryProductDetails/InventoryProductDetails';

const ManageProduct = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://happy-mart-database.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      });
  }, [])

  return (
    <>
      <div>
        <h1 className="text-left">Manage Product</h1> {loading && <Spinner animation="border" variant="primary" />}
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
          {
            !loading &&
            <tbody>
              {
                products.map(product => <InventoryProductDetails product={product} key={product._id} />)
              }
            </tbody>
          }
        </Table>
      </div>
    </>
  );
};

export default ManageProduct;