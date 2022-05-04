import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./WorkCards.scss";
import workCardData from "./work-cards.json";
import posterImage from "../../../assets/images/img-four.png";

const WorkCards = ({ filteredData }) => {
  const imageCard = useRef(null);

  const [cardIndex, setCardIndex] = useState();
  const onViewButton = () => {
      document.getElementById("view-button-id").classList.add("hover");
      if (cardIndex % 2 === 0) {
      document.getElementById("view-button-id").classList.add("white-view-button");
      } else if (cardIndex % 2 !== 0) {
      document.getElementById("view-button-id").classList.remove("white-view-button");
      }
  }
  const offViewButton = () => {
      document.getElementById("view-button-id").classList.remove("hover");
  }

  return (
    <section className="work-cards">
      {filteredData.map((cardItem, index) => (
        <div className="work-cards__card-item" key={index}>
          <Link to={`/work/interior/${cardItem._id}`}>
            <div
              className="work-cards__card-item__image-link"
              onMouseMove={() => (onViewButton(), setCardIndex(index))}
              onMouseOut={offViewButton}
              ref={imageCard}
            >
              <img src={cardItem.posterImage[0].url} alt="" />
            </div>
          </Link>
          <Link to={`/work/interior/${cardItem._id}`}>
            <div className="work-cards__card-item__title-continer">
              <p className="work-cards__card-item__title">{cardItem.title}</p>
              <svg
                viewBox="0 0 27 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5303 6.53033C26.8232 6.23744 26.8232 5.76257 26.5303 5.46967L21.7574 0.696701C21.4645 0.403808 20.9896 0.403808 20.6967 0.696701C20.4038 0.989594 20.4038 1.46447 20.6967 1.75736L24.9393 6L20.6967 10.2426C20.4038 10.5355 20.4038 11.0104 20.6967 11.3033C20.9896 11.5962 21.4645 11.5962 21.7574 11.3033L26.5303 6.53033ZM-6.55671e-08 6.75L26 6.75L26 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                  fill="#151515"
                />
              </svg>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};
//cardItem.posterImage[0].url
export default WorkCards;
