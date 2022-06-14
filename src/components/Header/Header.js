import React from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../router";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">AdGate</h1>
      <nav className="header__nav">
        {navLinks &&
          navLinks.map((link, index) => (
            <NavLink
              key={link.title + index}
              to={link.to}
              className={(navData) =>
                navData.isActive
                  ? "header__link header__link_active"
                  : "header__link"
              }
            >
              {link.title}
            </NavLink>
          ))}
      </nav>
    </header>
  );
};

export default Header;
