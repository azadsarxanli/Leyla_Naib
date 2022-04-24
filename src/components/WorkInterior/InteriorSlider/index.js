import './InteriorSlider.scss';
import sliderImagesData from './slider-images.json';
import sliderImage from '../../../assets/images/slider-img-1.png';
import { useState } from 'react';

const InteriorSlider = () => {
    const [sliderImages, setSliderImages] = useState(sliderImagesData);

    return (
        <section className="interior-slider">
            <div className="interior-slider__image-container">
                <div className="interior-slider__image-container__inner-container">
                    {sliderImages.map((sliderImg, index) => (
                        <img key={index} src={sliderImg.src} alt="" />
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