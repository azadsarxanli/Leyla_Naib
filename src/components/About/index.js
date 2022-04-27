import React from "react";
import { useEffect } from "react";
import "./About.scss";

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

  return <section>hay guys</section>;
};

export default About;
