import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faPlusSquare, faThLarge} from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  return (
    <Router>
      <div className="row text-center" style={{ height: "100%" }} >

        <div className="col-2" style={{ backgroundColor: "#203D37" }}>
          <h1><Link to="/home" className="text-white">Happy Mart</Link></h1>
          <br />
          <br />
          <h5><Link to="/admin/manage-product" className="text-white"><FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon> Manage Product</Link></h5>
          <h5><Link to="/admin/add-product" className="text-white"><FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon> Add Product</Link></h5>
          <h5><Link className="text-white" to="/edit-product"><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> Edit Product</Link></h5>
        </div>

        <div className="col-10 h-100" style={{ backgroundColor: "#F4FCFB" }}>
          <Switch>
            <Route exact path="/admin/">
              <ManageProduct />
            </Route>

            <Route path="/admin/manage-product">
              <ManageProduct />
            </Route>

            <Route path="/admin/add-product">
              <AddProduct />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
};

export default Admin;