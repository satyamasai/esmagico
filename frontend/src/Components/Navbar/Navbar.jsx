import React, { useState } from "react";
import "./Navbar.css";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
const navigate=useNavigate()
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };


  const handleLogout=()=>{
localStorage.setItem("userToken","")
navigate("/")

  }

  return (
    <nav>
      <div className="logo">
        <h2>Logo</h2>
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
        <li>
            <Button onClick={handleLogout} colorScheme={"red"} >Logout</Button>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleToggle}>
        {toggleMenu ? <FaTimes /> : <FaAlignJustify />}
      </div>
    </nav>
  );
}

export default Navbar;
