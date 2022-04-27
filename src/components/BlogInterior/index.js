import "./BlogInterior.scss";
import { useEffect } from "react";

const BlogInterior = () => {
  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");
    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-pink");
      header.classList.add("background-color-pink");
      header.classList.add("header-white");
    }
    return () => {
      body.className = "";
      header.className = "header";
    };
  });

  return <div>blog interior</div>;
};

export default BlogInterior;
