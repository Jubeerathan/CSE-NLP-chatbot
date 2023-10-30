import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../navigation.css";

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const response = axios.get(`${process.env.REACT_APP_BACKEND}/signout/`);
    console.log(response);
    Cookies.remove("jwt");
    navigate("../login");
  };

  return (
    <div>
      <Navbar expand="lg" className="navbar bg-dark" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="/adminDashboard">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                className="nav-item nav-link"
                to="/adminDashboard"
                activeClassName="active"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                to="/adminDashboard/knowledgebase"
                activeClassName="active"
                style={{ marginRight: "800px" }}
              >
                knwoledgebase
              </NavLink>
            </Nav>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
