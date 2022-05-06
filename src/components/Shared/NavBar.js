import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      
    <nav className="nav">
    <Link to="/">KITE</Link>
            <ul className="nav-links">
                <Link to="/login">LOGIN</Link>
                <Link to="/register">SIGNUP</Link>
            </ul>
    </nav>

)};

export default NavBar;
