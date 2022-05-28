import "./BlogInterior.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogInteriorImage from "../../../assets/images/blog-interior.png";
import quoteImage from "../../../assets/images/quote.png";
import selectiveImage from "../../../assets/images/selective-image.png";
import BreadCrumb from "../../BreadCrumb";

const BlogInterior = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive]);

  let { id } = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlogData = async () => {
    if (id) {
      try {
        const rawData = await fetch(`http://localhost:3001/api/blog/${id}`);
        const data = await rawData.json();
        await new Promise((x) => setTimeout(x, 10));
        setBlog(data.result);
      } catch (error) {
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-pink");
      header.classList.add("background-color-pink");
      header.classList.add("header-white");
      footer.classList.add("footer-white");
    }
    return () => {
      body.className = "";
      header.className = "header";
      footer.classList.remove("footer-white");
    };
  });

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;
  useEffect(() => {
    const viewButton = document.getElementById("view-button-id");
    if (!matchMedia && viewButton.className) {
      viewButton.classList.remove("hover");
    }
  });

  return (
    <>
      <BreadCrumb />
      <section className="blog-interior">
        <div className="blog-interior__blog-details-container">
          <h1 className="blog-interior__blog-details-container__title">
            {blog?.title}
          </h1>
          <div className="blog-interior__blog-details-container__image-and-image-detail">
            <p>{blog?.description}</p>
            <div className="img-cont">
              <img src={blog?.posterImage && blog.posterImage[0].url} alt="blog_image" />
            </div>
          </div>
          {/* <div className="blog-interior__blog-details-container__author-article">
            <p className="paragraph part-n">
              {blog.content?.secondParagraphAfterHeader}
            </p>
            <p className="paragraph part-n">
              {blog.content?.secondParagraphAfterHeader}
            </p>
          </div>
          <div className="blog-interior__blog-details-container__article-quote-image">
            <div className="blog-interior__blog-details-container__article-quote-image__container">
              <img src={quoteImage} alt="quoteimg" />
              <p>
                {blog.content?.quote}
              </p>
            </div>
            <p className="paragraph part-last part-n">
              {blog.content?.paragraphBeforeFooterImage}
            </p>
            <div className="blog-interior__blog-details-container__article-quote-image__selective-image">
              <img src={blog.content?.footerImage[0]?.url} alt="selective__image" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default BlogInterior;
