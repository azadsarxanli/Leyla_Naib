import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import LogoWhite from "../../assets/images/logo-signature-white.svg";
import mobileLogoDark from "../../assets/images/logo-mobile.png";
import mobileLogoWhite from "../../assets/images/logo-white-mobile.png";

import "./Header.scss";
import HeaderJSON from "./Header.json";
import { useState } from "react";
import { configure } from "@testing-library/react";

const Header = ({ onMouseEnter, onMouseLeave, windowScrollY }) => {

  const [header] = useState(HeaderJSON.items);
  const headerContainer = useRef(null);
  const windowHeight = window.innerHeight;
  const windowHeightHalf = window.innerHeight / 2;
  useEffect(() => {
    const headerColor = headerContainer.current;
    if (window.location.href.includes("")) {
      if (windowScrollY < windowHeightHalf) {
        if (headerContainer.current.className) {
          headerColor.className = "header";
          headerContainer.current.classList.remove("header-white");
        }
        headerContainer.current.classList.add("background-color-white");
      }
      if (
        windowScrollY > windowHeightHalf &&
        windowScrollY < windowHeightHalf + windowHeight
      ) {
        if (headerContainer.current.className) {
          headerColor.className = "header";

          headerContainer.current.classList.add("header-white");
        }
        headerContainer.current.classList.add("background-color-blue");
      }
      if (
        windowScrollY > windowHeightHalf + windowHeight &&
        windowScrollY < windowHeightHalf + 2 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerColor.className = "header";

          headerContainer.current.classList.remove("header-white");
        }
        headerContainer.current.className = "header";
        headerContainer.current.classList.add("background-color-lightgreen");
      }
      if (
        windowScrollY > windowHeightHalf + 2 * windowHeight &&
        windowScrollY < windowHeightHalf + 3 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerColor.className = "header";
        }
        headerContainer.current.classList.add("header-white");
        headerContainer.current.classList.add("background-color-purple");
      }
      if (
        windowScrollY > windowHeightHalf + 3 * windowHeight &&
        windowScrollY < windowHeightHalf + 4 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerColor.className = "header";
        }
        headerContainer.current.classList.add("header-white");
        headerContainer.current.classList.add("background-color-pink");
      }
      if (
        windowScrollY > windowHeightHalf + 4 * windowHeight &&
        windowScrollY < windowHeightHalf + 5 * windowHeight
      ) {
        if (headerContainer.current.className) {
          headerColor.className = "header";
          headerContainer.current.classList.remove("header-white");
        }
      }
    }
  }, [windowScrollY]);
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  const [panel, setPanel] = useState(false);
  const headerPanelHandler = () => {
    setPanel(true);
    document.body.style.overflowY = "hidden";
  };
  const headerPanelRemoveHandler = () => {
    setPanel(false);
    document.body.style.overflowY = null;
  };
  //responsive render

  return (
    <header className="header" ref={headerContainer}>
      {matchMedia ? (
        <>
          <div className="logo-mobile">
            <Link exact="true" to="/">
              <img
                src={mobileLogoDark}
                className="logo-dark-mobile"
                alt="mobile_logo"
              />
              <img
                src={mobileLogoWhite}
                className="logo-white-mobile"
                alt="mobile_logo"
              />
            </Link>
          </div>
          <div className="header__nav__mobile">
            <button onClick={headerPanelHandler} className="btn">
              Menu
            </button>
          </div>
          <div className={panel ? "header__panel active" : "header__panel"}>
            <button className="close-btn " onClick={headerPanelRemoveHandler}>
              X
            </button>
            <ul className="navigation">
              <li>
                <Link onClick={headerPanelRemoveHandler} to="about">
                  about
                </Link>
              </li>
              <li>
                <Link onClick={headerPanelRemoveHandler} to="work">
                  work
                </Link>
              </li>
              <li>
                <Link onClick={headerPanelRemoveHandler} to="blog">
                  blog
                </Link>
              </li>
              <li>
                <Link onClick={headerPanelRemoveHandler} to="contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="logo">
            <NavLink to="/">
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
                    // onClick={refreshPage}
                  >
                    {item.text}
                    <span className="dot"></span>
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
        </>
      )}
    </header>
  );
};

export default Header;
