import React from "react";
import Logo from "../../assets/images/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        <ul className="navigation">
          <li className="magic-hover magic-hover__square">ABout</li>
          <li>blabla</li>
          <li>work</li>
          <li>blog</li>
          <li>contact</li>
          <li className="language">
            <ul>
              <li>Ru</li>
              <li>en</li>
              <li>az</li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
