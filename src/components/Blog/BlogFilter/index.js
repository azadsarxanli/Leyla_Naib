import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./BlogFilter.scss";

const BlogFilter = ({ setCategoryName, setVal, blogData }) => {
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
  }, [blogData]);

  const allCategoriesName = ["ALL"];
  if (blogData) {
    blogData.map(data => {
      allCategoriesName.push(data.category);
    })
  }
  let uniqueNames = [...new Set(allCategoriesName)];

  return (
    <section className="blog-filter">
      <div ref={subHeaderRef} className="blog-filter__subheader">
        {uniqueNames?.map((categoryName, index) => (
          <p key={index} className={`paragraphs paragraph-${index + 1}`}>{categoryName}</p>
        ))}
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