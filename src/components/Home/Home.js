import { useEffect, useRef } from 'react';
import AboutLeyla from './AboutLeyla';
import Contact from './Contact';
import ExclusiveDesigns from './ExclusiveDesigns';
import LeylaNaib from './LeylaNaib';
import ReadMore from './ReadMore';
import ViewAll from './ViewAll';

const Home = () => {
    window.onscroll = () => {
        const windowHeight = window.innerHeight;
        const windowHeightHalf = window.innerHeight / 2;
        if (window.scrollY < windowHeightHalf) {
            document.body.style.backgroundColor = "white";
        } else if (window.scrollY > windowHeightHalf && window.scrollY < (windowHeightHalf + windowHeight)) {
            document.body.style.backgroundColor = "#3E71F1";
        } else if (window.scrollY > (windowHeightHalf + windowHeight) && window.scrollY < (windowHeightHalf + (2 * windowHeight))) {
            document.body.style.backgroundColor = "#99D4C2";
        } else if (window.scrollY > (windowHeightHalf + (2 * windowHeight)) && window.scrollY < (windowHeightHalf + (3 * windowHeight))) {
            document.body.style.backgroundColor = "#BC85D4";
        } else if (window.scrollY > (windowHeightHalf + (3 * windowHeight)) && window.scrollY < (windowHeightHalf + (4 * windowHeight))) {
            document.body.style.backgroundColor = "#D66CA3";
        } else if (window.scrollY > (windowHeightHalf + (4 * windowHeight)) && window.scrollY < (windowHeightHalf + (5 * windowHeight))) {
            document.body.style.backgroundColor = "white";
        }
    }


    return (
        <>
            <LeylaNaib />
            <AboutLeyla />
            <ViewAll />
            <ExclusiveDesigns />
            <ReadMore />
            <Contact />
        </>
    )
}

export default Home;