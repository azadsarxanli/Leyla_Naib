import "./InteriorSlider.scss";
import sliderImagesData from "./slider-images.json";
import sliderImage from "../../../../assets/images/slider-img-1.png";
import sliderImageMobile from "../../../../assets/images/slider-img-mobile.png";
import { useRef, useState, useEffect } from "react";

const InteriorSlider = () => {
  const [valueData, setValueData] = useState(0);
  const [sliderImages] = useState(sliderImagesData);
  const innerContainer = useRef();
  const inputRangeRef = useRef();
  useEffect(() => {
    const container = innerContainer.current;
    const input = inputRangeRef.current;

    var b = container.scrollWidth - container.clientWidth;
    input.setAttribute("max", b);
    container.addEventListener("scroll", () => {
      var a = container.scrollLeft;
      setValueData(a);
    });
  }, [valueData]);
  const onChangeHandler = (event) => {
    const container = innerContainer.current;
    container.scrollLeft = Number(event.target.value);
  };
  const matchMedia = window.matchMedia("(max-width: 486px)").matches;

  return (
    <section className="interior-slider">
      <div ref={innerContainer} className="interior-slider__image-container">
        <div className="interior-slider__image-container__inner-container">
          {sliderImages.map((sliderImg, index) =>
            !matchMedia ? (
              <img
                className="slider-img-desk"
                key={index}
                src={sliderImg.src}
                alt=""
              />
            ) : (
              <img
                className="slider-img-mob"
                key={index}
                src={sliderImg.srcMobile}
                alt="images"
              />
            )
          )}
          {/* {sliderImages.map((sliderImg, index) => (
            <img
              className="slider-img-mob"
              key={index}
              src={sliderImg.srcMobile}
              alt=""
            />
          ))} */}
        </div>
      </div>
      <div className="interior-slider__control-range">
        <input
          ref={inputRangeRef}
          value={valueData}
          min="0"
          max={100}
          type="range"
          onChange={onChangeHandler}
        />
      </div>
    </section>
  );
};

export default InteriorSlider;
