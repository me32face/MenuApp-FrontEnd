import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <img src={logo} alt="Deep Net Soft Logo" className="navbar-logo" />

      <div className="navbar-brand">
        <span className="brand-deep">DEEP </span>
        <span className="brand-net">NET</span>
        <span className="brand-soft">SOFT</span>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
          HOME
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
          MENU
        </NavLink>
        <NavLink to="/reservation" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
          MAKE A RESERVATION
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}>
          CONTACT US
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;