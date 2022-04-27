import "./Service.scss";
import { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    const body = document.body;
    const header = body.querySelector("header");
    if (!body.className) {
      header.className = "header";

      body.classList.add("background-color-purple");
      header.classList.add("background-color-purple");
      header.classList.add("header-white");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-purple");
      header.classList.remove("header-white");
    };
  });

  return <div>service</div>;
};

export default Service;
