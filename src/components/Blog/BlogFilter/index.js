import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./BlogFilter.scss";

const BlogFilter = ({ setCategoryName, setVal, blogData }) => {
  const [inputRangeValue, setInputRangeValue] = useState(10);

  const subHeaderRef = useRef();
  const [length, setLength] = useState(0); //? @Dev dynamically maximum value for input range

  const rangeChangeHandler = (event) => {
    const subHeader = subHeaderRef.current;
    setInputRangeValue(event.target.value);
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
    blogData.map((data) => {
      allCategoriesName.push(data.category);
    });
  }
  let uniqueNames = [...new Set(allCategoriesName)];
  const onClickHandler = (event, index) => {
    setCategoryName(event.target.textContent.toLowerCase());
    if (index === 0) {
      setVal(1);
      setInputRangeValue(10);
    } else {
      setVal(index + 1);
      setInputRangeValue((index + 1) * 10 - 3);
    }
  };

  return (
    <section className="blog-filter">
      <div ref={subHeaderRef} className="blog-filter__subheader">
        {uniqueNames?.map((categoryName, index) => (
          <p
            onClick={(event) => onClickHandler(event, index)}
            key={index}
            className={`paragraphs paragraph-${index + 1}`}
          >
            {categoryName}
          </p>
        ))}
      </div>
      <div className="blog-filter__range">
        <input
          onChange={rangeChangeHandler}
          min={10}
          max={length}
          value={inputRangeValue}
          type="range"
        />
      </div>
    </section>
  );
};

export default BlogFilter;
