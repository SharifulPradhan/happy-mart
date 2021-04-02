import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../logo.png";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" className="m-5 justify-content-between">
      <Navbar.Brand as={Link} to="/home"><img src={logo} alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home" className="active mr-5">Home</Nav.Link>
          <Nav.Link as={Link} to="/orders" className="mr-5">Orders</Nav.Link>
          <Nav.Link as={Link} to="/admin" className="mr-5">Admin</Nav.Link>
          <Nav.Link as={Link} to="/deals" className="mr-5">Deals</Nav.Link>
          {loggedInUser.isSignIn
            ? <Button as={Link} to="/user-details">{loggedInUser.name}</Button>
            : <Button as={Link} to="/login">Login</Button>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;