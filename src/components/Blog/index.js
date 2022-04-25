import React from "react";
import BreadCrumb from "./BreadCrumb";
import "./Blog.scss";
// import Filter from "../Work/WorkFilter";
import BlogFilter from "./BlogFilter";
import BlogNews from "./BlogNews";

const Blog = () => {
  return (
    <>
      <BreadCrumb />
      <BlogFilter />
      <BlogNews />
    </>
  );
};

export default Blog;
