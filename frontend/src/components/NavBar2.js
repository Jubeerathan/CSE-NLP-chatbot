import React, { useState, useEffect } from 'react';
import logo from './images/CSEBOT.png';
import avatar from './images/default-avatar.png';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar2 = () => {

  const [Username, setUsername] = useState('');
  const [Avatar, setAvatar] = useState(avatar)

  // Load user details from local storage when the component mounts
  useEffect(() => {
    const savedUserDetails = JSON.parse(localStorage.getItem('username'));

    if (savedUserDetails) {
      setUsername(savedUserDetails);
    }
  }, []);

  useEffect(() => {
    const savedUserDetails1 = JSON.parse(localStorage.getItem('userdetails'));

    if (savedUserDetails1) {
      setAvatar(savedUserDetails1.avatar);
      console.log(Avatar);
    }
  }, []);


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
        <div className="nav-item dropdown user-dropdown">
          <img src={Avatar} width="50" alt="" className="img-fluid rounded-circle" />
          <strong ><span className="ml-2 mr-3 text-white" style={{ fontStyle: "revert", fontFamily:"sans-serif", marginLeft:'5px'}}>Hi, {Username}</span></strong>
          
          <NavDropdown alignRight title="" id="basic-nav-dropdown">
            <NavDropdown.Item href="bot">BOT</NavDropdown.Item>
            <NavDropdown.Item href="changepassword">Change Password</NavDropdown.Item>
            <NavDropdown.Item href="editprofile">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="logout">Log Out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </header>
  );
};

export default NavBar2;
