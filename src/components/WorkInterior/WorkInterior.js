import { useEffect } from 'react';
import InteriorContent from './InteriorContent';
import InteriorDesigns from './InteriorDesigns';
import InteriorMainImage from './InteriorMainImage';
import InteriorSlider from './InteriorSlider';
import './WorkInterior.scss';

const WorkInterior = () => {
    const body = document.body;
    if (!body.className) {
        body.classList.add("background-color-lightgreen");
    }

    return (
        <>
            <InteriorMainImage />
            <InteriorContent />
            <InteriorDesigns />
            <InteriorSlider />
        </>
    )
}

export default WorkInterior;