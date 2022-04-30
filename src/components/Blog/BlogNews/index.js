import React from "react";
import blogImg from "../../../assets/images/blog-img.png";
import { Link } from "react-router-dom";
import "./BlogNews.scss";

const BlogNews = () => {
  return (
    <section className="blog-news">
      <div className="card">
        <div className="card__image">
          <img src={blogImg} alt="blogimage" />
        </div>
        <div className="card__detail">
          <p className="card_description">
            Ultrices in phasellus suspendisse et, urna. Fermentum elementum
            aliquam mattis luctus. Eu orci aliquam tincidunt enim. Facilisis
            odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida
            tristique...
          </p>
          <div className="read-more-and-title">
            <Link to="blog" className="read-more-link">
              Read more
            </Link>
            <p className="card-title">Sed cras ut vulputate a risus</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__image">
          <img src={blogImg} alt="blogimage" />
        </div>
        <div className="card__detail">
          <p className="card_description">
            Ultrices in phasellus suspendisse et, urna. Fermentum elementum
            aliquam mattis luctus. Eu orci aliquam tincidunt enim. Facilisis
            odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida
            tristique...
          </p>
          <div className="read-more-and-title">
            <Link to="blog" className="read-more-link">
              Read more
            </Link>
            <p className="card-title">Sed cras ut vulputate a risus</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__image">
          <img src={blogImg} alt="blogimage" />
        </div>
        <div className="card__detail">
          <p className="card_description">
            Ultrices in phasellus suspendisse et, urna. Fermentum elementum
            aliquam mattis luctus. Eu orci aliquam tincidunt enim. Facilisis
            odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida
            tristique...
          </p>
          <div className="read-more-and-title">
            <Link to="blog" className="read-more-link">
              Read more
            </Link>
            <p className="card-title">Sed cras ut vulputate a risus</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card__image">
          <img src={blogImg} alt="blogimage" />
        </div>
        <div className="card__detail">
          <p className="card_description">
            Ultrices in phasellus suspendisse et, urna. Fermentum elementum
            aliquam mattis luctus. Eu orci aliquam tincidunt enim. Facilisis
            odio eget morbi at nulla nisi. Mauris, ipsum convallis diam gravida
            tristique...
          </p>
          <div className="read-more-and-title">
            <Link to="blog" className="read-more-link">
              Read more
            </Link>
            <p className="card-title">Sed cras ut vulputate a risus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNews;
