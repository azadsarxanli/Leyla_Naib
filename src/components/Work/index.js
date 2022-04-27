import React, { useEffect } from "react";
import WorkCards from "./WorkCards";
import WorkFilter from "./WorkFilter";
import "./Work.scss";

const Work = ({ onMouseMove, onMouseOut }) => {
  useEffect(() => {
    const body = document.body;
    const header = body.querySelector("header");
    console.log("salam");
    if (!body.className) {
      header.className = "header";

      body.classList.add("background-color-lightgreen");
      header.classList.add("background-color-lightgreen");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-lightgreen");
    };
  });

  return (
    <>
      <WorkFilter />
      <WorkCards onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
    </>
  );
};

export default Work;
