import { useEffect, useState } from "react";
import BreadCrumb from "../BreadCrumb";
import "./Blog.scss";
import BlogFilter from "./BlogFilter";
import BlogItems from "./BlogItems";
import axios from "axios";

const Blog = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive]);

  const [blogData, setBlogData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [val, setVal] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:3001/api/blog")
      .then(res => setBlogData(res.data.result));
  }, [])

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

  const filteredData = blogData?.filter((item) => {
    if (val === 1) {
      return item;
    } else {
      return item.category?.toLowerCase() === categoryName;
    }
  });

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;
  useEffect(() => {
    const viewButton = document.getElementById("view-button-id");
    if (!matchMedia && viewButton.className) {
      viewButton.classList.remove("hover");
    }
  });

  return (
    <>
      <BreadCrumb />
      <BlogFilter
        blogData={blogData}
        setVal={setVal}
        setCategoryName={setCategoryName}
      />
      <BlogItems filteredData={filteredData} />
    </>
  );
};

export default Blog;
