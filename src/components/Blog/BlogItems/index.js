import React from "react";

import "./BlogNews.scss";
import BlogItem from "../BlogItem";

const BlogNews = ({ blogData }) => {
  return (
    <section className="blog-news">
      <BlogItem blogData={blogData} />
    </section>
  );
};

export default BlogNews;
