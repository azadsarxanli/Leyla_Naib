import React, { useEffect, useState } from "react";
import WorkCards from "./WorkCards";
import WorkFilter from "./WorkFilter";
import "./Work.scss";
import BreadCrumb from "../BreadCrumb";

const Work = ({ onMouseMove, onMouseOut, homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive])

  useEffect(() => {
    const body = document.body;
    const header = body.querySelector("header");
    const breadCrumb = document.getElementsByClassName("bread-crumb")[0];
    if (!body.className) {
      header.className = "header";

      body.classList.add("background-color-lightgreen");
      header.classList.add("background-color-lightgreen");
      breadCrumb.classList.add("bread-crumb-black");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-lightgreen");
      breadCrumb.classList.remove("bread-crumb-black");
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
