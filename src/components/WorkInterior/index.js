import { useEffect } from "react";
import InteriorContent from "./InteriorContent";
import InteriorDesigns from "./InteriorDesigns";
import InteriorMainImage from "./InteriorMainImage";
import InteriorSlider from "./InteriorSlider";
import "./WorkInterior.scss";

const WorkInterior = () => {
  useEffect(() => {
    const body = document.body;

    const header = document.querySelector("header");

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
      <InteriorMainImage />
      <InteriorContent />
      <InteriorDesigns />
      <InteriorSlider />
    </>
  );
};

export default WorkInterior;
