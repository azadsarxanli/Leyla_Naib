import React, { useEffect } from 'react';
import WorkCards from './WorkCards';
import WorkFilter from './WorkFilter';
import './Work.scss';
 
const Work = ({ onMouseMove, onMouseOut }) => {
    document.body.classList.add("background-color-lightgreen");

    return (
        <>
            <WorkFilter />
            <WorkCards onMouseMove={onMouseMove} onMouseOut={onMouseOut} />
        </>
    )
}

export default Work;