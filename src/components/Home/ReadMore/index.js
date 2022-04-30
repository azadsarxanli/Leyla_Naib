import { useEffect, useState } from "react";
import "./ReadMore.scss";
import readMoreData from "./ReadMore.json";
import sit from "../../../assets/images/sit-on-chair.png";
import sitt from "../../../assets/images/read-more.png";
import { Link } from "react-router-dom";

const ReadMore = ({ onMouseMove, onMouseOut }) => {
  const [moreData] = useState(readMoreData);
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  return (
    <section
      className="read-more"
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
    >
      {moreData.map((data, index) => (
        <div key={index} className="read-more__container">
          <div className="read-more__container__image">
            <img src={data.src} alt="" />
          </div>
          <div className="read-more__container__description">
            <p>
              <span>{data.bottomLineDesc}</span> {data.description}
            </p>
            <div className="read-more__container__description__title-and-btn-container">
              <div className="read-more-btn">
                <button>Read more</button>
              </div>
              <h2>{data.title}</h2>
            </div>
          </div>
        </div>
      ))}

      {matchMedia ? (
        <Link to="work" className="read-more__view-all-btn">
          view all
          <svg
            width="57"
            height="12"
            viewBox="0 0 57 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
              fill="white"
            />
          </svg>
        </Link>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ReadMore;
