import React, { useEffect, useRef, useState } from "react";
import "../css/Navbar.css";
import { GradualSpacing } from "./Gradual-spacing";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import logo from '../assets/logo-2.png'

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

  const [openMobile, setOpenMobile] = useState(false)
  console.log(openMobile)
  return (
    <div className="navbar-container">
      <div className="logo">
        <h2 onClick={goToHome} className="cursor-pointer ">
          {/* <GradualSpacing text="Hackite Infotech" /> */}
        </h2>
        <img src={logo} alt="logo" />
      </div>
      <div className="navlinks">
        <HiMenuAlt4
          ref={iconRef}
          onClick={() => setOpen(!open)} className="menu-icon" />
        <ul ref={menuRef} className={open ? 'active' : ''}>
          <Link to="#home" className="block " >Home</Link>

          {/* ================= services ================= */}
          <li className="dropdown">Services
            <div className="dropdown-content">
              <Link to="/cyber-security">Cyber Security</Link>
              <Link to="/web-app">Web Application</Link>
              <Link to="/mobile-app">Mobile App</Link>
              <Link to="/digital-marketing">Digital Marketing</Link>
            </div>
          </li>

          <a href="#contactus" className="dropdown">Contact Us
            {/* <div className="dropdown-content">
              <Link to="/service1">Service 1</Link>
              <Link to="/service2">Service 2</Link>
              <Link to="/service3">Service 3</Link>
            </div> */}
          </a>
          <Link to="/blog" className="dropdown">Blog
            {/* <div className="dropdown-content">
              <Link to="/service1">Service 1</Link>
              <Link to="/service2">Service 2</Link>
              <Link to="/service3">Service 3</Link>
            </div> */}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
