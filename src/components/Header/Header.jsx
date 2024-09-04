import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import '../Header/Global.css'
const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="header">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <LinkContainer to="/aboutme">
              <NavDropdown.Item>About Me</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/experience">
              <NavDropdown.Item>Experience</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/projects">
              <NavDropdown.Item>Projects</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to="/separated-link">
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
