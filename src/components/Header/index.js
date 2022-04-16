import React from "react";
import Logo from "../../assets/images/logo.svg";

import "./Header.scss";
import HeaderJSON from "./Header.json";
import { useState } from "react";
const Header = ({ onMouseEnter, onMouseLeave }) => {
  const [header] = useState(HeaderJSON.items);
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav>
        {/*? json apply olundu. iki array require oldugu ucun bu method istifade olunub. */}
        <ul className="navigation">
          {header.map((item, index) => (
            <li
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
              key={item.id}
              className={index === 4 ? "language" : ""}
            >
              {item.text}
              {index === 4 ? (
                <ul>
                  {item.languages.map((lang) => (
                    <li key={lang.id}>{lang.lang}</li>
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
