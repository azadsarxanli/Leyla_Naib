import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./BlogFilter.scss";

const BlogFilter = ({ setCategoryName, categoryData, setVal }) => {
  const subHeaderRef = useRef();
  const [length, setLength] = useState(0); //? @Dev dynamically maximum value for input range

  const rangeChangeHandler = (event) => {
    const subHeader = subHeaderRef.current;
    const paragraphs = [...subHeader.querySelectorAll("p")];
    paragraphs.forEach((item, index) => {
      if (item.className.includes(event.target.value / 10)) {
        setCategoryName(item.textContent.toLowerCase());
        setVal(event.target.value / 10);
      }
    });
  };
  useEffect(() => {
    const subHeader = subHeaderRef.current;
    const paragraphs = [...subHeader.querySelectorAll(".paragraphs")];
    setLength(paragraphs.length * 10);
  }, []);
  return (
    <section className="blog-filter">
      <div ref={subHeaderRef} className="blog-filter__subheader">
        <p className="paragraphs paragraph-1">All</p>
        <p className="paragraphs paragraph-2">Exclusive decor</p>
        <p className="paragraphs paragraph-3">Interior</p>
        <p className="paragraphs paragraph-4">Exterior</p>
      </div>
      <div className="blog-filter__range">
        <input
          onChange={rangeChangeHandler}
          min={10}
          max={length}
          type="range"
        />
      </div>
    </section>
  );
};

export default BlogFilter;
