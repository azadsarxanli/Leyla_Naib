import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Logo from "../../assets/images/logo.svg";

import "./Header.scss";
import HeaderJSON from "./Header.json";
import { useState } from "react";

const Header = ({ onMouseEnter, onMouseLeave, windowScrollY }) => {
  const [header] = useState(HeaderJSON.items);
  const headerContainer = useRef();
  const windowHeight = window.innerHeight;
  const windowHeightHalf = window.innerHeight / 2;
  // const navLinks = document.getElementsByTagName('li');
  
  // console.log(navLinks)

  useEffect(() => {
    if (windowScrollY < windowHeightHalf) {
      headerContainer.current.style.backgroundColor = "white"
      // navLinks.current.style.color = "#101010"
    } else if (windowScrollY > windowHeightHalf && windowScrollY < (windowHeightHalf + windowHeight)) {
      headerContainer.current.style.backgroundColor = "#3e71f1"
      // navLinks.current.style.color = "#F2F2F2"
    } else if (windowScrollY > (windowHeightHalf + windowHeight) && windowScrollY < (windowHeightHalf + (2 * windowHeight))) {
      headerContainer.current.style.backgroundColor = "#99d4c2"
      // navLinks.current.style.color = "#383838"
    } else if (windowScrollY > (windowHeightHalf + (2 * windowHeight)) && windowScrollY < (windowHeightHalf + (3 * windowHeight))) {
      headerContainer.current.style.backgroundColor = "#bc85d4"
      // navLinks.current.style.color = "#F2F2F2"
    } else if (windowScrollY > (windowHeightHalf + (3 * windowHeight)) && windowScrollY < (windowHeightHalf + (4 * windowHeight))) {
      // headerContainer.current.style.backgroundColor = "#d66ca3"
    } else if (windowScrollY > (windowHeightHalf + (4 * windowHeight)) && windowScrollY < (windowHeightHalf + (5 * windowHeight))) {
      headerContainer.current.style.backgroundColor = "white"
      // navLinks.current.style.color = "#101010"
    }
  }, [windowScrollY])

  return (
    <header className="header" ref={headerContainer}>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav className="header__nav">
        {/*? json apply olundu. iki array require oldugu ucun bu method istifade olunub. */}
        <ul className="navigation">
          {header.map((item, index) => (
            <li
              onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
              key={item.id}
              className={index === 5 ? "language" : null}
            >
              <Link to={item.link}>{item.text}</Link>
              {index === 5 ? (
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
