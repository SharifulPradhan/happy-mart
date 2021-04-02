import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ProductDetails = (props) => {
  const { _id, name, price, imageURL } = props.product;
  const history = useHistory();

  const handleBuyNow = id => {
    const url = `check-out/${id}`
    history.push(url);
  }
  return (
    <div className="col-sm-4 mt-5 d-flex justify-content-around">
      <Card className='text-center shadow' style={{ width: '18rem', hieght: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={imageURL} className="img-fluid" style={{hieght: '300px' }}/>
          <Card.Title style={{ fontSize: '1rem', fontWeight: '700' }}>{name}</Card.Title>
          <h3><b style={{color:'#99CC00'}}>${price}</b> <Button variant="primary" onClick={() => handleBuyNow(_id)}>Buy Now</Button></h3>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;