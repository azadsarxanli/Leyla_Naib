import { useEffect, useState } from 'react';
import './ExclusiveDesigns.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExclusiveDesigns = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3001/api/portfolio")
        .then(res => setPortfolioData(res.data.result.splice(0, 4)))
    }, [])

    let matchMedia = window.matchMedia("(max-width: 991px)").matches;

    const [cardIndex, setCardIndex] = useState();
    const onViewButton = () => {
        if (!matchMedia) {
            document.getElementById("view-button-id").classList.add("hover");
            if (cardIndex % 2 === 0) {
            document.getElementById("view-button-id").classList.add("white-view-button");
            } else if (cardIndex % 2 !== 0) {
            document.getElementById("view-button-id").classList.remove("white-view-button");
            }
        }
    }
    const offViewButton = () => {
        document.getElementById("view-button-id").classList.remove("hover");
    }

    return (
        <section className="exclusive-design">
            <div className="exclusive-design__container">
                {portfolioData.map((portfolio, index) => (
                    <Link to="/work" 
                        key={index}
                        onMouseMove={() => (onViewButton(), setCardIndex(index))}
                        onMouseOut={offViewButton}
                    >
                        <div className="exclusive-design__container__card-item">
                            <div className="exclusive-design__container__card-item__title-and-desc">
                                <h1>{portfolio?.category}</h1>
                                <p className="description">{portfolio?.title} <br/> {portfolio?.title}</p>
                            </div>
                            <div className="exclusive-design__container__card-item__image">
                                <img src={portfolio.posterImage[0].url} alt="" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ExclusiveDesigns;