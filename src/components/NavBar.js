import React, { useEffect, useState } from "react";
import logo from "../images/netflix-logo-png-2584.png";
import "../styles/navbar.scss";

const NavBAr = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <nav className={showNav && "nav-color"}>
      <div className="image-container">
        <img src={logo} alt="Logo" />
      </div>

      <button className="sigin">Sign In</button>
    </nav>
  );
};

export default NavBAr;
