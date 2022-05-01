import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  useEffect(() => {
    const body = document.body;
    body.className = "background-dark-blue";
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    header.className = "header header-white";
    footer.className = "footer footer-white";

    header.style.background = "#416475";
    return () => {
      header.className = "header";
      footer.className = "footer";
      body.className = "";
      header.style.background = "";
    };
  });
  return (
    <section className="error-cont">
      <h1 className="title">Səhifə tapılmadı...</h1>
      <p className="zoom-area">
        <b>{":("}</b> Ana səhifəyə yönəlmək üçün aşağıdakı düyməni sıxın{" "}
      </p>
      <section className="error-container">
        <span>4</span>
        <span>
          <span className="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div className="link-container">
        <Link to="/" className="more-link">
          Ana səhifə
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
