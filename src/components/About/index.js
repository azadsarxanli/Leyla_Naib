import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import BreadCrumb from "../BreadCrumb";
import "./About.scss";
import AboutContents from "./AboutContents";
import AboutImages from "./AboutImages";
import AboutTriangles from "./AboutTriangles";
import LeylaAbout from "./LeylaAbout";

const About = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive])

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

  const [aboutData, setAboutData] = useState([]);
  const [aboutContent, setAboutContent] = useState([]);
  const [aboutModule, setAboutModule] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/about")
      .then(res => setAboutData(res.data.result))
  }, [])

  useEffect(() => {
    if (aboutData) {
      setAboutContent(aboutData.content);
      setAboutModule(aboutData.module);
    }
  }, [aboutData])

  return (
    <>
      <BreadCrumb />
      <LeylaAbout aboutData={aboutData} />
      <AboutImages aboutContent={aboutContent} />
      <AboutContents aboutModule={aboutModule} />
      <AboutTriangles />
    </>
  );
};

export default About;
