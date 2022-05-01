import { useEffect } from "react";
import BreadCrumb from "./BreadCrumb";
import "./Blog.scss";
// import Filter from "../Work/WorkFilter";
import BlogFilter from "./BlogFilter";
import BlogItems from "./BlogItems";

const Blog = () => {
  useEffect(() => {
    const body = document.body;
    let header = document.querySelector("header");

    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-pink");
      header.classList.add("background-color-pink");
      header.classList.add("header-white");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-pink");
    };
  });

  return (
    <>
      <BreadCrumb />
      <BlogFilter />
      <BlogItems />
    </>
  );
};

export default Blog;
