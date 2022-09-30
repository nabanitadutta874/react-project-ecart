import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

const NavbarComponent = (props) => {
  return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Collapse id="navbar-nav" >
            <Nav className="justify-content-end flex-grow-1 ">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/carts">Carts
              <Badge bg="danger" className="ms-1">{props.count}</Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  );
};
export default NavbarComponent;
