import React from "react";
import "../css/Navbar.css";
import { GradualSpacing } from "./Gradual-spacing";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate()

  const goToHome = () => {
    nav('/')
  }
  return (
    <div className="navbar-container">
      <div className="logo">
        <h2 onClick={goToHome} className="cursor-pointer">
          <GradualSpacing text="Hackite" />
        </h2>
      </div>
      <div className="navlinks">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/blog">Blog</Link>
          {/* <li>Contact Us</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
