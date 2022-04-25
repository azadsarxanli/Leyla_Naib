import React from 'react';
import './WorkFilter.scss';

const WorkFilter = () => {
    return (
        <section className="work-filter">
            <div className="work-filter__subheader">
                <p>All</p>
                <p>Exlusive decor</p>
                <p>Interior</p>
                <p>Exterior</p>
            </div>
            <div className="work-filter__range">
                <input type="range" />
            </div>
        </section>
    )
}

export default WorkFilter;