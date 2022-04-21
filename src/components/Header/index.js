import React from "react";
import Logo from "../../assets/images/logo.svg";

import "./Header.scss";
import HeaderJSON from "./Header.json";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = ({ onMouseEnter, onMouseLeave }) => {
  const [background, setBackground] = useState(false);
  const [header] = useState(HeaderJSON.items);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        {/*? json apply olundu. iki array require oldugu ucun bu method istifade olunub. */}
        <ul className="navigation">
          {header.map((item, index) => (
            <li
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
              key={item.id}
              className={index === 4 ? "language" : null}
            >
              <Link to={item.link}>{item.text}</Link>
              {index === 4 ? (
                <ul>
                  {item.languages.map((lang) => (
                    <li key={lang.id}>
                      <Link to={lang.link}>{lang.lang}</Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
