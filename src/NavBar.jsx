import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="p-3 mb-4">
      <Navbar.Brand href="/">FakeStoreAPI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/" activeclassname="active">
            Products
          </Nav.Link>
          <NavDropdown title="Change Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Add Product</NavDropdown.Item>
            <NavDropdown.Item href="/">Edit Product</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
