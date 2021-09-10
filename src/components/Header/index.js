import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


function Header() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/Home">Danny Gamer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav class="ml-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/Home">Home</NavDropdown.Item>
              <NavDropdown.Item href="/Roblox">Roblox</NavDropdown.Item>
              <NavDropdown.Item href="/Cars">Cars</NavDropdown.Item>
              <NavDropdown.Item href="/Legos">Legos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
