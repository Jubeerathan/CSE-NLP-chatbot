import React from 'react';
import logo from './images/CSEBOT.png';
import avatar from './images/default-avatar.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar2 = () => {
  return (
    <header className="navbar page-header darkHeader border0 navbar-expand-lg" style={{height: "80px"}}>
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            style={{
              width: "40px",
              height: "36px",
              paddingTop: "0px",
              marginTop: "2px",
              transform: "scale(1.5)",
              marginLeft: "10px",
              marginRight: "10px",
              borderRadius: "90%",
              border: "1px solid #ffffff",
            }}
            src={logo}
            alt="Logo"
          />
          <span className="text-white fs-1x font700">CSEBOT</span>
        </a>

        {/* Profile Dropdown */}
        <ul className="nav flex-row order-lg-2 ml-auto nav-icons align-items-center">
          <li className="nav-item dropdown user-dropdown">
            <NavDropdown
              alignRight
              title={
                <img
                  src={avatar}
                  width="50"
                  alt=""
                  className="img-fluid rounded-circle"
                />
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="changepassword">Change Password</NavDropdown.Item>
              <NavDropdown.Item href="editprofile">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="logout">Log Out</NavDropdown.Item>
            </NavDropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar2;
