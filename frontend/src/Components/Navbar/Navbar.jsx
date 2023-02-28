import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Box, Button, Select, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const adminToken = localStorage.getItem("adminToken") || "";

  const navigate = useNavigate();
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLogout = () => {
    localStorage.setItem("userToken", "");
    navigate("/");
  };

  const handleAdminLogout = () => {
    localStorage.setItem("adminToken", "");
    navigate("/");
  };

  return (
    <nav>
      <div className="logo">
        <img
          src="https://static.wixstatic.com/media/2ecac5_785f196eb88942beb8f5508138e767b5~mv2.png/v1/crop/x_14,y_4,w_149,h_45/fill/w_140,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2054.png"
          alt="logo"
        />
      </div>
      <ul className={toggleMenu ? "nav-links mobile" : "nav-links"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/user/login">Log in</a>
        </li>
        <li>
          <a href="/user/signup">Signup</a>
        </li>
        <li>
          <a href="/user/dashboard">User Dashboard </a>
        </li>
        {/*------------admin */}

        <div class="dropdown">
        <button class="dropbtn">For Admin</button>
        <div class="dropdown-content">
          <a href="/admin/signup">Admin Signup</a>
          <a href="/admin/login">Admin login</a>
          <a href="/admin/dashboard">Admin Dashboard</a>
        </div>
      </div>

        {/*------------admin */}
        <li>
          <Button size={"sm"} onClick={handleLogout} colorScheme={"red"}>
            Logout
          </Button>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        {toggleMenu ? <FaTimes /> : <FaAlignJustify />}
      </div>
    </nav>
  );
}

export default Navbar;
