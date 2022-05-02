import React, { useEffect, useState } from "react";
import WorkCards from "./WorkCards";
import WorkFilter from "./WorkFilter";
import "./Work.scss";
import BreadCrumb from "../BreadCrumb";

const Work = ({ onMouseMove, onMouseOut }) => {

  useEffect(() => {
    const body = document.body;
    const header = body.querySelector("header");
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
      <BreadCrumb />
      <WorkFilter />
      <WorkCards onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
    </>
  );
};

export default Work;
