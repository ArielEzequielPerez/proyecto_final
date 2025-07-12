import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faSignOutAlt,
  faBoxes
} from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../context/AuthContext";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";

export default function Navbar() {
  const { user, logout } = useAuthContext();
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Mi tienda
        </BootstrapNavbar.Brand>
        <BootstrapNavbar>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="d-flex gap-2">
                {user && (
                  <>
                    <Nav.Link as={Link} to="/new" className="text-white">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/products"
                      className="text-white"
                      title="Ver productos"
                    >
                      <FontAwesomeIcon icon={faBoxes} />
                    </Nav.Link>
                  </>
                )}
                <Nav.Link as={Link} to="/cart" className="text-white">
                  <FontAwesomeIcon icon={faCartShopping} />
                </Nav.Link>
                {user ? (
                  <Nav.Link onClick={logout} className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} />{" "}
                  </Nav.Link>
                ) : (
                  <Nav.Link as={Link} to="/login" className="text-white">
                    <FontAwesomeIcon icon={faUser} /> {/* Ícono de Login */}
                  </Nav.Link>
                )}
              </div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </BootstrapNavbar>
      </Container>
    </BootstrapNavbar>
  );
}
