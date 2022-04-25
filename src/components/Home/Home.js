import { useEffect, useRef, useState } from 'react';
import './Home.scss';
import AboutLeyla from './AboutLeyla';
import Contact from './Contact';
import ExclusiveDesigns from './ExclusiveDesigns';
import LeylaNaib from './LeylaNaib';
import ReadMore from './ReadMore';
import ViewAll from './ViewAll';

const Home = ({ onMouseMove, onMouseOut, windowScrollY }) => {
    const body = document.body;
    body.classList.add("background-color-white");
    const windowHeight = window.innerHeight;
    const windowHeightHalf = window.innerHeight / 2;

    useEffect(() => {
        if (windowScrollY < windowHeightHalf) {
            body.classList.add("background-color-white");
            body.classList.remove("background-color-blue");
            body.classList.remove("background-color-lightgreen");
            body.classList.remove("background-color-purple");
            body.classList.remove("background-color-pink");
        } else if (windowScrollY > windowHeightHalf && windowScrollY < (windowHeightHalf + windowHeight)) {
            body.classList.add("background-color-blue");
            body.classList.remove("background-color-white");
            body.classList.remove("background-color-lightgreen");
            body.classList.remove("background-color-purple");
            body.classList.remove("background-color-pink");
        } else if (windowScrollY > (windowHeightHalf + windowHeight) && windowScrollY < (windowHeightHalf + (2 * windowHeight))) {
            body.classList.add("background-color-lightgreen");
            body.classList.remove("background-color-blue");
            body.classList.remove("background-color-white");
            body.classList.remove("background-color-purple");
            body.classList.remove("background-color-pink");
        } else if (windowScrollY > (windowHeightHalf + (2 * windowHeight)) && windowScrollY < (windowHeightHalf + (3 * windowHeight))) {
            body.classList.add("background-color-purple");
            body.classList.remove("background-color-blue");
            body.classList.remove("background-color-white");
            body.classList.remove("background-color-lightgreen");
            body.classList.remove("background-color-pink");
        } else if (windowScrollY > (windowHeightHalf + (3 * windowHeight)) && windowScrollY < (windowHeightHalf + (4 * windowHeight))) {
            body.classList.add("background-color-pink");
            body.classList.remove("background-color-blue");
            body.classList.remove("background-color-white");
            body.classList.remove("background-color-lightgreen");
            body.classList.remove("background-color-purple");
        } else if (windowScrollY > (windowHeightHalf + (4 * windowHeight)) && windowScrollY < (windowHeightHalf + (5 * windowHeight))) {
            body.classList.remove("background-color-blue");
            body.classList.remove("background-color-lightgreen");
            body.classList.remove("background-color-purple");
            body.classList.remove("background-color-pink");
            body.classList.add("background-color-white");
        }
    }, [windowScrollY])

    return (
        <>
            <LeylaNaib />
            <AboutLeyla />
            <ViewAll onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
            <ExclusiveDesigns />
            <ReadMore onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
            <Contact />
        </>
    )
}

export default Home;
