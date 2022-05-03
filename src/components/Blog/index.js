import { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb";
import "./Blog.scss";
import BlogFilter from "./BlogFilter";
import BlogItems from "./BlogItems";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/blog")
      .then((response) => response.json())
      .then((data) => setBlogData(data.result));
  }, []);
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
      <BreadCrumb />
      <BlogFilter />
      <BlogItems blogData={blogData} />
    </>
  );
};

export default Blog;
