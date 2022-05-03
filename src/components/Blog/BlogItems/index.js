import React from "react";

import "./BlogNews.scss";
import BlogItem from "../BlogItem";

const BlogNews = ({ blogData, filteredData }) => {
  return (
    <section className="blog-news">
      <BlogItem filteredData={filteredData} blogData={blogData} />
    </section>
  );
};

export default BlogNews;
