import React, { useEffect, useState } from "react";
import WorkCards from "./WorkCards";
import WorkFilter from "./WorkFilter";
import "./Work.scss";
import BreadCrumb from "../BreadCrumb";
import axios from 'axios';

const Work = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive]);
  
  let filteredData = [];
  const [workData, setWorkData] = useState([]);
  const [categoryNameData, setCategoryNameData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [val, setVal] = useState(1);
  useEffect(() => {
    fetch("http://localhost:3001/api/portfolio", { mode: "cors" })
      .then((response) => response.json())
      .then((data) => setWorkData(data.result));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/category")
      .then(res => setCategoryNameData(res.data.result))
  }, [])

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;
  useEffect(() => {
    const viewButton = document.getElementById("view-button-id");
    if (!matchMedia && viewButton.className) {
      viewButton.classList.remove("hover");
    }
  });

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

  const filteredName = categoryNameData.filter((item) => {
    if (val === 1) {
      return item;
    } else {
      return item.categoryName.toLowerCase() === categoryName;
    }
  });

  if (workData.length !== 0) {
    workData.map(data => {
      for (let i = 0; i < filteredName.length; i++ ) {
        if (filteredName[i]._id === data.category) {
          filteredData.push(data);
        }
      }
    })
  }

  return (
    <>
      <BreadCrumb />
      <WorkFilter
        setVal={setVal}
        setCategoryName={setCategoryName}
        categoryNameData={categoryNameData}
      />
      <WorkCards
        filteredData={filteredData}
      />
    </>
  );
};

export default Work;
