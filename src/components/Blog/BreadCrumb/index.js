import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumb.scss";

const BreadCrumb = () => {
  return (
    <section className="bread-crumb">
      <Link to="/">home .</Link>
      <Link to="/blog">blog .</Link>
    </section>
  );
};

export default BreadCrumb;