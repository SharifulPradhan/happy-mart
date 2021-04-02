import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const [loading, setLoading] = useState(false)

  const onSubmit = data => {
    const productData = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      imageURL: imageURL
    };
    fetch('https://happy-mart-database.herokuapp.com/addProduct', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(res => console.log('server side response', res))
    alert("Product Added to Directory Successfully")
  }

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '64b76738cc4b20654a1a7630702359ff');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <h1 className="text-left mt-5">Add Product</h1>
      <div className="w-50 mx-auto mt-5 border rounded p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col">
              <label>Product Name</label>
              <input name="name" defaultValue="Product Name" ref={register} className="form-control" />
            </div>
            <div className="col">
              <label>Add Price</label>
              <input name="price" placeholder="price" type="number" ref={register} className="form-control" />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col">
              <label>Add Quantity</label>
              <input name="quantity" placeholder="quantity" type="number" ref={register} className="form-control" />
            </div>
            <div className="col">
              <label>Add Image</label>
              <input name="file" type="file" onChange={handleImageUpload} onClick={() => setLoading(true)} />
            </div>
          </div>
          {
            loading
              ? <div className="text-center"><Spinner animation="border" variant="primary" /></div>
              : <input type="submit" value='Save' className="row mt-5" />
          }
        </form>
      </div >
    </div>
  );
};

export default AddProduct;