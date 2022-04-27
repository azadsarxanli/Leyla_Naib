import React from "react";
import { useEffect } from "react";
import AboutLeyla from "../Home/AboutLeyla";
import "./About.scss";
import AboutImages from "./AboutImages";

const About = () => {
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");
    if (!body.className) {
      header.className = "header";

      body.classList.add("background-color-blue");
      header.classList.add("background-color-blue");
      header.classList.add("header-white");
    }
    return () => {
      body.className = "";
      header.className = "header";
    };
  });

  return (
    <>
      <AboutLeyla />
      <AboutImages />
    </>
  )
};

export default About;
