import React from "react";
import AboutLeyla from "../Home/AboutLeyla";
import "./About.scss";
import AboutImages from "./AboutImages";

const About = () => {
  const body = document.body;
  if (!body.className) {
      body.classList.add("background-color-blue");
  }

  return (
    <>
      <AboutLeyla />
      <AboutImages />
    </>
  )
};

export default About;
