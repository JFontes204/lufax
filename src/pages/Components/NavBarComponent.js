import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBarComponent() {
  return (
    <Navbar className="navbar-light text-white" expand="sm">
      <div className="container">
        <Link className="navbar-brand text-link-img" to={'/'}>
          Home
        </Link>
        <Navbar.Toggle aria-controls="collapsibleNavId" />
        <Navbar.Collapse id="collapsibleNavId">
          <Nav className="ml-auto mr-auto">
            <Nav.Item className="nav-link">
              <Link id="link-to-home" className="text-link-nav" to={'/home'}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-link">
              <Link className="nav-item text-link-nav" to={'/militante'}>
                Products
              </Link>
            </Nav.Item>
            <NavDropdown title={'JFontes'} id="dropdown-in-nav">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href={'/'}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
