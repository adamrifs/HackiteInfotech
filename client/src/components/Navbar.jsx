import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import { GradualSpacing } from "./Gradual-spacing";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {
  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const goToHome = () => {
    nav('/')
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div className="navbar-container">
      <div className="logo">
        <h2 onClick={goToHome} className="cursor-pointer">
          <GradualSpacing text="Hackite Infotech" />
        </h2>
      </div>
      <div className="navlinks">
        <HiMenuAlt4
          ref={iconRef}
          onClick={() => setOpen(!open)} className="menu-icon" />
        <ul ref={menuRef} className={open ? 'active' : ''}>
          <Link to="/">Home</Link>
          <Link to="/service">Services</Link>
          <Link to="/blog">Blog</Link>
          <li>Contact Us</li>
        </ul> 
      </div>
    </div>
  );
};

export default Navbar;
