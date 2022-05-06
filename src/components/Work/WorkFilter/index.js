import React from "react";
import "./WorkFilter.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const WorkFilter = ({ setCategoryName, setVal, workData }) => {
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
  }, [workData]);

  const allCategoriesName = ["ALL"];
  if (workData) {
    workData.map(data => {
      allCategoriesName.push(data.category);
    })
  }
  let uniqueNames = [...new Set(allCategoriesName)];

  return (
    <section className="work-filter">
      <div className="work-filter__subheader" ref={subHeaderRef}>
        {uniqueNames?.map((categoryName, index) => (
          <p key={index} className={`paragraphs paragraph-${index + 1}`}>{categoryName}</p>
        ))}
      </div>
      <div className="work-filter__range">
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

export default WorkFilter;
