import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import LogoWhite from '../../assets/images/logo-signature-white.svg';

import "./Header.scss";
import HeaderJSON from "./Header.json";
import { useState } from "react";

const Header = ({ onMouseEnter, onMouseLeave, windowScrollY }) => {
  const [header] = useState(HeaderJSON.items);
  const headerContainer = useRef(null);
  const windowHeight = window.innerHeight;
  const windowHeightHalf = window.innerHeight / 2;

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      if (windowScrollY < windowHeightHalf) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.remove("header-white");
        }
        headerContainer.current.style.backgroundColor = "white";
      }
      if (
        windowScrollY > windowHeightHalf &&
        windowScrollY < windowHeightHalf + windowHeight
      ) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.add("header-white");
        }
        headerContainer.current.style.backgroundColor = "#3e71f1";
      }
      if (
        windowScrollY > windowHeightHalf + windowHeight &&
        windowScrollY < windowHeightHalf + 2 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.remove("header-white");
        }
        headerContainer.current.style.backgroundColor = "#99d4c2";
      }
      if (
        windowScrollY > windowHeightHalf + 2 * windowHeight &&
        windowScrollY < windowHeightHalf + 3 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.add("header-white");
        }
        headerContainer.current.style.backgroundColor = "#bc85d4";
      }
      if (
        windowScrollY > windowHeightHalf + 3 * windowHeight &&
        windowScrollY < windowHeightHalf + 4 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.add("header-white");
        }
        headerContainer.current.style.backgroundColor = "#d66ca3";
      }
      if (
        windowScrollY > windowHeightHalf + 4 * windowHeight &&
        windowScrollY < windowHeightHalf + 5 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.remove("header-white");
        }
        headerContainer.current.style.backgroundColor = "white";
      }
    } else if (window.location.href === "http://localhost:3000/about") {
      if (headerContainer.current.className) {
        headerContainer.current.classList.add("header-white");
      }
      headerContainer.current.style.backgroundColor = "#3e71f1";
    } else if (
        window.location.href === "http://localhost:3000/work" 
        || window.location.href === "http://localhost:3000/work-interior"
      ) {
        if (headerContainer.current.className) {
          headerContainer.current.classList.remove("header-white");
        }
        headerContainer.current.style.backgroundColor = "#99d4c2";
    }
  }, [windowScrollY]);

  function refreshPage() {
    document.reload(true);
  }

  return (
    <header className="header" ref={headerContainer}>
      <div className="logo">
        <NavLink to="/" onClick={refreshPage}>
          <img className="logo-black" src={Logo} alt="logo" />
          <img className="logo-white" src={LogoWhite} alt="logo" />
        </NavLink>
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
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to={item.link}
                onClick={refreshPage}
              >
                {item.text}
                <span className="dot">.</span>
              </NavLink>
              {index === 5 ? (
                <ul>
                  {item.languages.map((lang) => (
                    <li key={lang.id}>
                      <NavLink to={lang.link} onClick={refreshPage}>{lang.lang}</NavLink>
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
