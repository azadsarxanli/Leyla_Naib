import React from "react";
import BreadCrumb from "./BreadCrumb";
import "./Blog.scss";
// import Filter from "../Work/WorkFilter";
import BlogFilter from "./BlogFilter";
import BlogNews from "./BlogNews";

const Blog = () => {
  const body = document.body;
  if (!body.className) {
    body.classList.add("background-color-pink");
  }

  return (
    <>
      <BreadCrumb />
      <BlogFilter />
      <BlogNews />
    </>
  );
};

export default Blog;
