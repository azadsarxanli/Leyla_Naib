import { useEffect, useRef, useState } from "react";
import "./Home.scss";
import AboutLeyla from "./AboutLeyla";
import Contact from "../Contact";
import ExclusiveDesigns from "./ExclusiveDesigns";
import LeylaNaib from "./LeylaNaib";
import ReadMore from "./ReadMore";
import ViewAll from "./ViewAll";

const Home = ({ onMouseMove, onMouseOut, windowScrollY }) => {
  const body = document.body;
  const windowHeight = window.innerHeight;
  const windowHeightHalf = window.innerHeight / 2;
  useEffect(() => {
    if (window.location.href.includes("")) {
      body.classList.add("background-color-white");
      console.log(windowScrollY > windowHeightHalf);
      if (windowScrollY < windowHeightHalf) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-white");
        }
      } else if (
        windowScrollY > windowHeightHalf &&
        windowScrollY < windowHeightHalf + windowHeight
      ) {
        console.log("else if serti");
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-blue");
        }
      } else if (
        windowScrollY > windowHeightHalf + windowHeight &&
        windowScrollY < windowHeightHalf + 2 * windowHeight
      ) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-lightgreen");
        }
      } else if (
        windowScrollY > windowHeightHalf + 2 * windowHeight &&
        windowScrollY < windowHeightHalf + 3 * windowHeight
      ) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-purple");
        }
      } else if (
        windowScrollY > windowHeightHalf + 3 * windowHeight &&
        windowScrollY < windowHeightHalf + 4 * windowHeight
      ) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-pink");
        }
      } else if (
        windowScrollY > windowHeightHalf + 4 * windowHeight &&
        windowScrollY < windowHeightHalf + 5 * windowHeight
      ) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-white");
        }
      }
    }
  }, [windowScrollY]);

  return (
    <>
      <LeylaNaib />
      <AboutLeyla />
      <ViewAll onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
      <ExclusiveDesigns />
      <ReadMore onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
      <Contact />
    </>
  );
};

export default Home;
