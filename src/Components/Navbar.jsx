import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-nav">
      <p className="logo">CampusCoder</p>
      <ul className="nav-link-nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="nav-link-nav">Home</li>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <li className="nav-link-nav">About</li>
        </Link>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <li className="nav-link-nav">Login</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
