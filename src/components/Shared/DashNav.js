import React from "react";
import { Link } from "react-router-dom";

const DashNav = () => {
  return (
      
    <nav className="nav">
    <Link to="/">KITE</Link>
            <ul className="nav-links">
                <Link to="/" >LOGOUT</Link>
            </ul>
    </nav>

)};

export default DashNav;
