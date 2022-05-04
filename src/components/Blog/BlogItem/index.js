import React from "react";
import blogImg from "../../../assets/images/blog-img.png";
import { Link } from "react-router-dom";

const BlogItem = ({ filteredData }) => {
  console.log(filteredData, "filteredData");
  return (
    <div>
      {filteredData.map((item, index) => (
        <div key={index} className="card">
          <div className="card__image">
            <img src={item.posterImage} alt="blogimage" />
          </div>
          <div className="card__detail">
            <p className="card_description">
              {/* Ultrices in phasellus suspendisse et, urna. Fermentum elementum
              aliquam mattis luctus. Eu orci aliquam tincidunt enim. Facilisis
              odio eget morbi at nulla nisi. Mauris, ipsum convallis diam
              gravida tristique... */}
              {item.description}
            </p>
            <div className="read-more-and-title">
              <Link
                to={`/blog/interior/${item._id}`}
                className="read-more-link"
              >
                Read more
              </Link>
              <p className="card-title">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogItem;
