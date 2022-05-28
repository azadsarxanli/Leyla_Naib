import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../BreadCrumb";
import InteriorContent from "./InteriorContent";
import InteriorDesigns from "./InteriorDesigns";
import InteriorMainImage from "./InteriorMainImage";
import InteriorSlider from "./InteriorSlider";
import "./WorkInterior.scss";

const WorkInterior = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive]);
  let { id } = useParams();
  const [work, setWork] = useState({});
  const fetchBlogData = async () => {
    if (id) {
      try {
        const rawData = await fetch(
          `http://localhost:3001/api/portfolio/${id}`
        );
        const data = await rawData.json();
        await new Promise((x) => setTimeout(x, 10));
        setWork(data);
      } catch (error) {
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  useEffect(() => {
    const body = document.body;

    const header = document.querySelector("header");
    const breadCrumb = document.getElementsByClassName("bread-crumb")[0];

    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-lightgreen");
      header.classList.add("background-color-lightgreen");
      if (breadCrumb) breadCrumb.classList.add("bread-crumb-black");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-lightgreen");
      if (breadCrumb) breadCrumb.classList.remove("bread-crumb-black");
    };
  });

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;
  useEffect(() => {
    const viewButton = document.getElementById("view-button-id");
    if (!matchMedia && viewButton.className) {
      viewButton.classList.remove("hover");
    }
  });

  return (
    <>
      <BreadCrumb />
      <InteriorMainImage work={work} />
      <InteriorContent work={work} />
      {/* <InteriorDesigns work={work} /> */}
      <InteriorSlider work={work} />
    </>
  );
};

export default WorkInterior;
