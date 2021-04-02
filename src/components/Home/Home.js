import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://happy-mart-database.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, [])

  return (
    <div className="container-sm bg-color text-center mt-5">
      <h1 style={{ color: "red" }}>শুভ নববর্ষ!! নতুন বছরে অর্ডার করলেই ফ্রি হোম ডেলিভারি</h1>
      <img src="https://www.google.com/logos/doodles/2017/first-day-of-bengali-calendar-pohela-boishakh-5669119973130240.3-2xa.gif" alt="" fluid rounded />
      {
        loading
          ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
          : <div className="row">
            {
              products.map(product => <ProductDetails product={product} key={product._id}></ProductDetails>)
            }
          </div>
      }
    </div>
  );
};

export default Home;