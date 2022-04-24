import React, { useEffect } from 'react';
import WorkCards from './WorkCards';
import WorkFilter from './WorkFilter';
import './Work.scss';
 
const Work = () => {
    document.body.classList.add("background-color-lightgreen");

    return (
        <>
            <WorkFilter />
            <WorkCards />
        </>
    )
}

export default Work;