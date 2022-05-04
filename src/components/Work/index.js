import React, { useEffect, useState } from "react";
import WorkCards from "./WorkCards";
import WorkFilter from "./WorkFilter";
import "./Work.scss";
import BreadCrumb from "../BreadCrumb";

const Work = ({ homeActive, setHomeActive }) => {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive]);
  const [workData, setWorkData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [val, setVal] = useState(1);
  useEffect(() => {
    fetch("http://localhost:3001/api/portfolio", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setWorkData(data.result));
  }, []);

  const onMouseMove = () => {
    setHover(true);
  };
  const onMouseOut = () => {
    setHover(false);
  };

  useEffect(() => {
    return () => {
      setHover(false);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    const header = body.querySelector("header");
    const breadCrumb = document.getElementsByClassName("bread-crumb")[0];
    if (!body.className) {
      header.className = "header";

      body.classList.add("background-color-lightgreen");
      header.classList.add("background-color-lightgreen");
      if (breadCrumb) breadCrumb.classList.add("bread-crumb-black");
    }
    return () => {
      body.className = "";
      header.classList.remove("background-color-lightgreen");
      if (breadCrumb) breadCrumb.classList.remove("bread-crumb-black");
    };
  });
  const filteredData = workData.filter((item) => {
    if (val === 1) {
      return item;
    } else {
      console.log(val, "value");
      return item.category.toLowerCase() === categoryName;
    }
  });

  return (
    <>
      <BreadCrumb />

      <WorkFilter
        setVal={setVal}
        val={val}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
      />
      <WorkCards
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
        filteredData={filteredData}
        workData={workData}
      />
    </>
  );
};

export default Work;
