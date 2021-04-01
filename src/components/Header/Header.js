import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Navbar variant="light" className="mt-5 container justify-content-between">
      <Navbar.Brand as={Link} to="/home">Happy Mart</Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/home" className="active mr-5">Home</Nav.Link>
        <Nav.Link as={Link} to="/orders" className="mr-5">Orders</Nav.Link>
        <Nav.Link as={Link} to="/admin" className="mr-5">Admin</Nav.Link>
        <Nav.Link as={Link} to="/deals" className="mr-5">Deals</Nav.Link>
        {loggedInUser.isSignIn
        ?<Button as={Link} to="/user-details">{loggedInUser.name}</Button>
        :<Button as={Link} to="/login">Login</Button>
        }
      </Nav>
    </Navbar>
  );
};

export default Header;