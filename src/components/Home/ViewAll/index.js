import { useEffect, useRef, useState } from "react";
import "./ViewAll.scss";
import imageOne from "../../../assets/images/img-one.png";
import imageTwo from "../../../assets/images/img-two.png";
import imageThree from "../../../assets/images/img-three.png";
import imageFour from "../../../assets/images/img-four.png";
import imageFive from "../../../assets/images/img-five.png";
import imageSixth from "../../../assets/images/img-sixth.png";

const ViewAll = () => {
  const [currentScrollValue, setCurrentScrollValue] = useState(0);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);
  const [imageContainerScrollHeight, setImageContainerScrollHeight] =
    useState(0);
  const [inputOnChangeValue, setInputOnChangeValue] = useState();
  const imageContainer = useRef();

  const onClickInput = (e) => {
    onScrollContainer(e);
    imageContainer.current.scrollTo({
      top: inputOnChangeValue,
      behavior: "smooth",
    });
  };

  const onScrollContainer = (e) => {
    setCurrentScrollValue(e.target.scrollTop);
    setImageContainerHeight(e.target.offsetHeight);
    setImageContainerScrollHeight(e.target.scrollHeight);
  };

  const onChangeInput = (e) => {
    setInputOnChangeValue(e.target.value);
  };

  return (
    <section className="view-all">
      <div className="view-all__title">
        <p>View all</p>
        <div>
          <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
          </svg>
        </div>
      </div>
      <div className="view-all__images-section">
        <div
          className="view-all__images-section__cards"
          onScroll={onScrollContainer}
          ref={imageContainer}
        >
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageOne} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageTwo} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageThree} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageFour} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageFive} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>

          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
          <div className="view-all__images-section__cards__card-item">
            <div className="view-all__images-section__cards__card-item__image">
              <img src={imageSixth} alt="" />
            </div>
            <div className="view-all__images-section__cards__card-item__view-work">
              <p>VIEW WORK</p>
              <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="view-all__images-section__scroll-card-line">
          <input
            type="range"
            value={currentScrollValue}
            onChange={onChangeInput}
            onClick={onClickInput}
            min="0"
            max={imageContainerScrollHeight - imageContainerHeight}
          />
        </div>
      </div>
    </section>
  );
};

export default ViewAll;
