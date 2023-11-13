import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/contact">
            <Navbar.Brand>Contact Us</Navbar.Brand>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
