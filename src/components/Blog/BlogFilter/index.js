import React from "react";
import "./BlogFilter.scss";

const BlogFilter = () => {
  return (
    <section className="blog-filter">
      <div className="blog-filter__subheader">
        <p>All</p>
        <p>Exlusive decor</p>
        <p>Interior</p>
        <p>Exterior</p>
      </div>
      <div className="blog-filter__range">
        <input type="range" />
      </div>
    </section>
  );
};

export default BlogFilter;
