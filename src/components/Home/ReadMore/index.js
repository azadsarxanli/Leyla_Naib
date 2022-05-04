import { useEffect, useState } from "react";
import "./ReadMore.scss";
import readMoreData from "./ReadMore.json";
import sit from "../../../assets/images/sit-on-chair.png";
import sitt from "../../../assets/images/read-more.png";
import { Link } from "react-router-dom";

const ReadMore = () => {
  const [moreData] = useState(readMoreData);

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
    <section
      className="read-more"
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
    </section>
  );
};

export default ReadMore;
