import { useEffect } from "react";
import "./Blog.scss";
import BlogFilter from "./BlogFilter";
import BlogItems from "./BlogItems";

const Blog = () => {
  useEffect(() => {
    const body = document.body;
    const footer = document.querySelector("footer");
    const header = document.querySelector("header");

    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-pink");
      header.classList.add("background-color-pink");
      header.classList.add("header-white");
      footer.classList.add("footer-white");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-pink");
      footer.classList.remove("footer-white");
    };
  });

  return (
    <>
      <BlogFilter />
      <BlogItems />
    </>
  );
};

export default Blog;
