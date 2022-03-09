import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from "./logo.png";


function Header() {
  return (
    <div>
      <div className="nav1">    
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand id="logoname" href="/Home">
        <img src={logo} alt="logo" /> Danny <br></br>Gamer
        </Navbar.Brand>
    <Nav id="navitem">
      <Nav.Link id="homenav" href="/Home">Home</Nav.Link>
      <Nav.Link id="homenav" href="/Roblox">Roblox</Nav.Link>
      <Nav.Link id="homenav" href="/Cars">Cars</Nav.Link>
      <Nav.Link id="homenav" href="/Legos">Legos</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  <div className="nav2">
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand id="logoname" href="/Home">
        <img src={logo} alt="logo" /> Danny <br></br>Gamer
        </Navbar.Brand>
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
      </Container>
    </Navbar>
    </div>
    </div>
  );
}

export default Header;
