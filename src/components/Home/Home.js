import React, { useEffect, useState } from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Home = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:4200/products')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, [])

  return (
      <div className="container-sm bg-color">
        <div className="row">
          {
            products.map(product => <ProductDetails product={product} key={product._id}></ProductDetails>)
          }
        </div>
      </div>
  );
};

export default Home;