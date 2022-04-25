import React from "react";
import "./About.scss";

const About = () => {
  const body = document.body;
  if (!body.className) {
      body.classList.add("background-color-blue");
  }

  return <section>hay guys</section>;
};

export default About;
