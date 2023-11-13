import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Navigate } from "react-router-dom";
import Style from '../contacts.module.css'

function ColorSchemesExample() {
  return (
    <>
      <br />
      <Navbar
        style={{ borderRadius: "5px",position:"absolute",top:"0",width:"90%", }}
        bg="primary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav  className="me-auto">
            <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Link to={`/contacts/`} >
            <Nav.Link href="#pricing">Contacts</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
