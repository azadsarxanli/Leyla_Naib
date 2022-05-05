import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ filteredData }) => {
  return (
    <div>
      {filteredData.map((item, index) => (
        <div key={index} className="card">
          <div className="card__image">
            <img src={item?.posterImage[0].url} alt="blogimage" />
          </div>
          <div className="card__detail">
            <p className="card_description">
              {item?.description}
            </p>
            <div className="read-more-and-title">
              <Link
                to={`/blog/interior/${item?._id}`}
                className="read-more-link"
              >
                Read more
              </Link>
              <p className="card-title">{item?.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogItem;
