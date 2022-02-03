import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <div className="topbar">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Link to="/" className="home">HOME</Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="topbar">
                😉 SB ADMIN 2
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <hr />
                <Link to="/products" className="home1">PRODUCTS</Link>
                <hr />
                <Link to="/Addcameras" className="home1">ADD PRODUCTS</Link>
                <hr />
                <Link to="/users" className="home1">USERS</Link>
                <hr />
                <Link to="/Addusers" className="home1">ADD USERS</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
