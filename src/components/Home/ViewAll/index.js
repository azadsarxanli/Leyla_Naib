import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ViewAll.scss";
import imageOne from "../../../assets/images/img-one.png";
import imageTwo from "../../../assets/images/img-two.png";
import imageThree from "../../../assets/images/img-three.png";
import imageFour from "../../../assets/images/img-four.png";
import imageFive from "../../../assets/images/img-five.png";
import imageSixth from "../../../assets/images/img-sixth.png";
import mobileDetailRectangle from "../../../assets/images/rectangle.svg";
import dataApi from "./data.json";

const ViewAll = () => {
  const [valueData, setValueData] = useState(0);
  const [cardIndex, setCardIndex] = useState();
  const imageContainer = useRef();
  const inputRangeRef = useRef();

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

  useEffect(() => {
    const container = imageContainer.current;
    const input = inputRangeRef.current;
    var b = container.scrollHeight - container.clientHeight;
    input.setAttribute("max", b);
    container.addEventListener("scroll", () => {
      var a = container.scrollTop;
      setValueData(a);
    });
  }, [valueData]);
  
  const onChangeInput = (event) => {
    const container = imageContainer.current;
    container.scrollTop = Number(event.target.value);
  };
  const [data] = useState(dataApi.items);

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  return (
    <section className="view-all">
      <div className="view-all__title">
        {!matchMedia ? <p>View all</p> : <p>View all works</p>}
        <Link to="/work">
          <div>
            <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="view-all__images-section">
        <div className="view-all__images-section__cards" ref={imageContainer}>
          {data.map((item, index) => (
            <Link to="/work" key={item.id * index}>
              <div
                className="view-all__images-section__cards__card-item"
                onMouseMove={() => (onViewButton(), setCardIndex(index))}
                onMouseOut={offViewButton}
              >
                <div className="view-all__images-section__cards__card-item__image">
                  <img src={item.src} alt="background images" />
                </div>
                {matchMedia ? (
                  <div className="view-all__images-section__cards__card-item__product-name">
                    <p>product name </p>
                    <span>
                      <svg
                        width="27"
                        height="12"
                        viewBox="0 0 27 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.5303 6.53033C26.8232 6.23744 26.8232 5.76257 26.5303 5.46967L21.7574 0.696701C21.4645 0.403808 20.9896 0.403808 20.6967 0.696701C20.4038 0.989594 20.4038 1.46447 20.6967 1.75736L24.9393 6L20.6967 10.2426C20.4038 10.5355 20.4038 11.0104 20.6967 11.3033C20.9896 11.5962 21.4645 11.5962 21.7574 11.3033L26.5303 6.53033ZM-6.55671e-08 6.75L26 6.75L26 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                          fill="#151515"
                        />
                      </svg>
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="view-all__images-section__scroll-card-line">
          <input
            type="range"
            ref={inputRangeRef}
            onChange={onChangeInput}
            min="0"
            max={100}
            value={valueData}
          />
        </div>
      </div>
    </section>
  );
};

export default ViewAll;
