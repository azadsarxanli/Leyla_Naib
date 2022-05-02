import { useEffect } from "react";
import BreadCrumb from "../../BreadCrumb";
import InteriorContent from "./InteriorContent";
import InteriorDesigns from "./InteriorDesigns";
import InteriorMainImage from "./InteriorMainImage";
import InteriorSlider from "./InteriorSlider";
import "./WorkInterior.scss";

const WorkInterior = () => {

  useEffect(() => {
    const body = document.body;

    const header = document.querySelector("header");
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
      <InteriorMainImage />
      <InteriorContent />
      <InteriorDesigns />
      <InteriorSlider />
    </>
  );
};

export default WorkInterior;
