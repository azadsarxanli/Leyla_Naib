import './InteriorSlider.scss';
import sliderImagesData from './slider-images.json';
import sliderImage from '../../../assets/images/slider-img-1.png';
import sliderImageMobile from '../../../assets/images/slider-img-mobile.png';
import { useState } from 'react';

const InteriorSlider = () => {
    const [sliderImages, setSliderImages] = useState(sliderImagesData);

    return (
        <section className="interior-slider">
            <div className="interior-slider__image-container">
                <div className="interior-slider__image-container__inner-container">
                    {sliderImages.map((sliderImg, index) => (
                        <img className="slider-img-desk" key={index} src={sliderImg.src} alt="" />
                    ))}
                    {sliderImages.map((sliderImg, index) => (
                        <img className="slider-img-mob" key={index} src={sliderImg.srcMobile} alt="" />
                    ))}
                </div>
            </div>
            <div className="interior-slider__control-range">
                <input type="range" />
            </div>
        </section>
    )
}

export default InteriorSlider;