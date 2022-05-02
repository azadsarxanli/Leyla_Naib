import React from "react";
import { useEffect } from "react";
import "./About.scss";
import AboutContents from "./AboutContents";
import AboutImages from "./AboutImages";
import AboutTriangles from "./AboutTriangles";
import LeylaAbout from "./LeylaAbout";

const About = () => {
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (!body.className) {
      header.className = "header";

      body.classList.add("background-color-blue");
      header.classList.add("background-color-blue");
      header.classList.add("header-white");
      footer.classList.add("footer-white");
    }
    return () => {
      body.className = "";
      header.className = "header";
      footer.classList.remove("footer-white");
    };
  });

  return (
    <>
      <LeylaAbout />
      <AboutImages />
      <AboutContents />
      <AboutTriangles />
    </>
  );
};

export default About;
