import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

import "./Header.scss";
import HeaderJSON from "./Header.json";
import { useState } from "react";

const Header = ({ onMouseEnter, onMouseLeave, windowScrollY }) => {
  // headerContainer.current.style.backgroundColor = "#3E71F1";
  const [header] = useState(HeaderJSON.items);
  const headerContainer = useRef();
  const windowHeight = window.innerHeight;
  const windowHeightHalf = window.innerHeight / 2;
  // const navLinks = document.getElementsByTagName('li');

  // console.log(navLinks)

  useEffect(() => {
    if (window.location.href === "http://localhost:3000/") {
      if (windowScrollY < windowHeightHalf) {
        headerContainer.current.style.backgroundColor = "white";
        // navLinks.current.style.color = "#101010";
      }
      if (
        windowScrollY > windowHeightHalf &&
        windowScrollY < windowHeightHalf + windowHeight
      ) {
        headerContainer.current.style.backgroundColor = "#3e71f1";
        // navLinks.current.style.color = "#F2F2F2"
      }
      if (
        windowScrollY > windowHeightHalf + windowHeight &&
        windowScrollY < windowHeightHalf + 2 * windowHeight
      ) {
        headerContainer.current.style.backgroundColor = "#99d4c2";
        // navLinks.current.style.color = "#383838"
      }
      if (
        windowScrollY > windowHeightHalf + 2 * windowHeight &&
        windowScrollY < windowHeightHalf + 3 * windowHeight
      ) {
        headerContainer.current.style.backgroundColor = "#bc85d4";
        // navLinks.current.style.color = "#F2F2F2"
      }
      if (
        windowScrollY > windowHeightHalf + 3 * windowHeight &&
        windowScrollY < windowHeightHalf + 4 * windowHeight
      ) {
        headerContainer.current.style.backgroundColor = "#d66ca3";
      }
      if (
        windowScrollY > windowHeightHalf + 4 * windowHeight &&
        windowScrollY < windowHeightHalf + 5 * windowHeight
      ) {
        headerContainer.current.style.backgroundColor = "white";
        // navLinks.current.style.color = "#101010"
      }
    } else if (window.location.href === "http://localhost:3000/about") {
      document.body.style.background = "#3E71F1";
      if (windowScrollY < windowHeightHalf) {
        headerContainer.current.style.backgroundColor = "#3E71F1";
        headerContainer.current.className = "header about";
        // navLinks.current.style.color = "#101010";
      }
    }
  }, [windowScrollY]);

  return (
    <header className="header" ref={headerContainer}>
      <div className="logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" />
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
              >
                {item.text}
                <span className="dot">.</span>
              </NavLink>
              {index === 5 ? (
                <ul>
                  {item.languages.map((lang) => (
                    <li key={lang.id}>
                      <NavLink to={lang.link}>{lang.lang}</NavLink>
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
