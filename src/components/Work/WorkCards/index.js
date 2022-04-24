import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkCards.scss';
import workCardData from './work-cards.json';

const WorkCards = () => {
    const [cardData, setCardData] = useState(workCardData);

    return (
        <section className="work-cards">
            {cardData.map((cardItem, index) => (
                <div className="work-cards__card-item" key={index}>
                    <Link to="/work-interior">
                        <div className="work-cards__card-item__image-link">
                            <img src={cardItem.src} alt="" />
                            <div className="work-cards__card-item__image-link__view-work-button">
                                <p>VIEW WORK</p>
                                <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                    <p className="work-cards__card-item__title">{cardItem.title}</p>
                </div>
            ))}
        </section>
    )
}

export default WorkCards;