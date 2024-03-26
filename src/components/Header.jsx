import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React,{useState} from 'react';
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={require('./logo.webp')}></img>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">Quem somos</Nav.Link>
            <NavDropdown title="Como vai funcionar?" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Inovação
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Beneficios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;