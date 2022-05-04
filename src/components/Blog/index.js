import { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb";
import "./Blog.scss";
import BlogFilter from "./BlogFilter";
import BlogItems from "./BlogItems";

const Blog = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive])

  const [blogData, setBlogData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [val, setVal] = useState(1);
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

  const filteredData = blogData.filter((item) => {
    if (val === 1) {
      return item;
    } else {
      return item.category.toLowerCase() === categoryName;
    }
  });

  return (
    <>
      <BreadCrumb />
      <BlogFilter
        setVal={setVal}
        val={val}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
      <BlogItems filteredData={filteredData} blogData={blogData} />
    </>
  );
};

export default Blog;
