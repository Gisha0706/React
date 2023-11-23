import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./nav.module.css";

const NavbarComponent = () => {
  return (
    // <Navbar style={{position:"sticky",top:"0",zIndex:"999"}}  bg="primary" data-bs-theme="dark">
    //   <Container>
    //     <Link to="/">
    //       <Navbar.Brand>Navbar</Navbar.Brand>
    //     </Link>
    //     <Nav className="me-auto">
    //       <Link to="/contact">
    //         <Navbar.Brand>Contact Us</Navbar.Brand>
    //       </Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <nav className={Style.navMenu}>
      <div className={Style.menubl}>
           <Link to="/">
        <a href="#">Home</a>
           </Link>
       <Link to="/contact">
        <a href="#">Contact</a>
      </Link>
      <Link to="/aboute">
      <a href="#">About</a>
      </Link>
        <div className={Style.dot}></div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
