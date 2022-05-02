import "./Service.scss";
import { useEffect } from "react";
import BreadCrumb from "../BreadCrumb";

const Service = () => {
  useEffect(() => {
    const body = document.body;
    const header = body.querySelector("header");
    const footer = document.querySelector("footer");
    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-purple");
      header.classList.add("background-color-purple");
      header.classList.add("header-white");
      footer.classList.add("footer-white");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-purple");
      header.classList.remove("header-white");
      footer.classList.remove("footer-white");
    };
  });

  return (
    <>
      <BreadCrumb />
      <section className="service"></section>
    </>
  );
};

export default Service;
