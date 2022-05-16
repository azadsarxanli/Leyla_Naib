import React from "react";
import "./WorkFilter.scss";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const WorkFilter = ({ setCategoryName, setVal, workData, categoryName }) => {
  const [inputRangeValue, setInputRangeValue] = useState(10);
  const subHeaderRef = useRef();
  const inputRef = useRef();

  const [length, setLength] = useState(0); //? @Dev dynamically maximum value for input range

  const rangeChangeHandler = (event) => {
    setInputRangeValue(event.target.value);

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
    workData.map((data) => {
      allCategoriesName.push(data.category);
      return data;
    });
  }
  let uniqueNames = [...new Set(allCategoriesName)];
  const onClickHandler = (event, index) => {
    setCategoryName(event.target.textContent.toLowerCase());
    if (index === 0) {
      setVal(1);
      setInputRangeValue(10);
    } else {
      setVal(index);
      setInputRangeValue((index + 1) * 10);
    }
  };

  return (
    <section className="work-filter">
      <div className="work-filter__subheader" ref={subHeaderRef}>
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
      <div className="work-filter__range">
        <input
          ref={inputRef}
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

export default WorkFilter;
