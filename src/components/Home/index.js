import { useEffect, useRef, useState } from "react";
import "./Home.scss";
import AboutLeyla from "./AboutLeyla";
import Contact from "../Contact";
import ExclusiveDesigns from "./ExclusiveDesigns";
import LeylaNaib from "./LeylaNaib";
import ReadMore from "./ReadMore";
import ViewAll from "./ViewAll";

const Home = ({ setHomeActive, homeActive }) => {
  const [hover, setHover] = useState(false);
  const onMouseMove = () => {
    setHover(true);
  };
  const onMouseOut = () => {
    setHover(false);
  };
  useEffect(() => {
    return () => {
      setHover(false);
    };
  }, []);
  console.log(hover, "hover value");
  const body = document.body;
  const windowHeight = window.innerHeight;
  const windowHeightHalf = window.innerHeight / 2;

  useEffect(() => {
    if (!homeActive) {
      setHomeActive(true);
    }
  }, [homeActive]);

  const [windowScrollY, setWindowScrollY] = useState(0);

  window.addEventListener(
    "scroll",
    function () {
      setWindowScrollY(window.scrollY);
    },
    true
  );
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  useEffect(() => {
    const header = document.querySelector("header");
    if (window.location.href.includes("")) {
      body.classList.add("background-color-white");
      if (windowScrollY < windowHeightHalf) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-white");
        }
      } else if (
        windowScrollY > windowHeightHalf &&
        windowScrollY < windowHeightHalf + windowHeight
      ) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-blue");
          if (matchMedia) {
            const section = document.querySelector(".view-all");
            section.style.backgroundColor = "#3e71f1";
          }
        }
      } else if (
        windowScrollY > windowHeightHalf + windowHeight &&
        windowScrollY < windowHeightHalf + 2 * windowHeight
      ) {
        if (body.className) {
          body.className = "";
          // background mobile ucun background if serti daxil edilmelidir
          body.classList.add("background-color-lightgreen");
          if (matchMedia) {
            const section = document.querySelector(".view-all");

            section.style.backgroundColor = "#99d4c2";
          }
        }
      } else if (
        windowScrollY > windowHeightHalf + 2 * windowHeight &&
        windowScrollY < windowHeightHalf + 3 * windowHeight
      ) {
        if (body.className) {
          body.className = "";
          body.classList.add("background-color-purple");
          if (matchMedia) {
            const section = document.querySelector(".view-all");
            section.style.backgroundColor = "transparent";
          }
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
      return () => {
        body.className = "";
        header.className = "header";
      };
    }
  }, [windowScrollY]);

  return (
    <>
      <LeylaNaib />
      <AboutLeyla />
      <ViewAll onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
      <ExclusiveDesigns onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
      <ReadMore onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
      <Contact />
    </>
  );
};

export default Home;
