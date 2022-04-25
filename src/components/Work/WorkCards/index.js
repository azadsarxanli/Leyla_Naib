import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkCards.scss';
import workCardData from './work-cards.json';

const WorkCards = ({ onMouseMove, onMouseOut }) => {
    const [cardData, setCardData] = useState(workCardData);
    const imageCard = useRef(null);

    function refreshPage() {
        document.reload(true);
    }

    return (
        <section className="work-cards">
            {cardData.map((cardItem, index) => (
                <div className="work-cards__card-item" key={index}>
                    <Link to="/work-interior" onClick={refreshPage}>
                        <div 
                            className="work-cards__card-item__image-link" 
                            onMouseMove={onMouseMove} 
                            onMouseOut={onMouseOut}
                            ref={imageCard}
                        >
                            <img src={cardItem.src} alt="" />
                        </div>
                    </Link>
                    <p className="work-cards__card-item__title">{cardItem.title}</p>
                </div>
            ))}
        </section>
    )
}

export default WorkCards;