import "./InteriorSlider.scss";
import sliderImagesData from "./slider-images.json";
import { useRef, useState, useEffect } from "react";

const InteriorSlider = ({ work }) => {
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
          {work.response?.content.footerImage.map((sliderImg, index) =>
            <img
              key={index}
              src={sliderImg.url}
              alt=""
            />
          )}
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
