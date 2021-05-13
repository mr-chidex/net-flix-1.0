import React from "react";
import logo from "../images/netflix-logo-png-2584.png";
import "../styles/navbar.scss";

const NavBAr = () => {
  return (
    <nav>
      <div className="image-container">
        <img src={logo} alt="Logo" />
      </div>

      <button className="sigin">Sign In</button>
    </nav>
  );
};

export default NavBAr;
