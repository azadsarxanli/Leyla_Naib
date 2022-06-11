import { useEffect, useState } from 'react';
import './ExclusiveDesigns.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExclusiveDesigns = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [categoryNameData, setCategoryNameData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/category")
            .then(res => setCategoryNameData(res.data.result.splice(0, 5)))
        axios.get("http://localhost:3001/api/portfolio")
            .then(res => setPortfolioData(res.data.result.splice(0, 5)))
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
                <Link to="/work" 
                    onMouseMove={() => (onViewButton(), setCardIndex(0))}
                    onMouseOut={offViewButton}
                >
                    <div className="exclusive-design__container__card-item">
                        <div className="exclusive-design__container__card-item__title-and-desc">
                            <h1>{categoryNameData && categoryNameData[0]?.categoryName}</h1>
                        </div>
                        <div className="exclusive-design__container__card-item__image">
                            <img src={portfolioData && portfolioData[0]?.posterImage[0]?.url} alt="" />
                        </div>
                    </div>
                </Link>
                <Link to="/work" 
                    onMouseMove={() => (onViewButton(), setCardIndex(1))}
                    onMouseOut={offViewButton}
                >
                    <div className="exclusive-design__container__card-item">
                        <div className="exclusive-design__container__card-item__title-and-desc">
                            <h1>{categoryNameData && categoryNameData[1]?.categoryName}</h1>
                        </div>
                        <div className="exclusive-design__container__card-item__image">
                            <img src={portfolioData && portfolioData[1]?.posterImage[0]?.url} alt="" />
                        </div>
                    </div>
                </Link>
                <Link to="/work" 
                    onMouseMove={() => (onViewButton(), setCardIndex(2))}
                    onMouseOut={offViewButton}
                >
                    <div className="exclusive-design__container__card-item">
                        <div className="exclusive-design__container__card-item__title-and-desc">
                            <h1>{categoryNameData && categoryNameData[2]?.categoryName}</h1>
                        </div>
                        <div className="exclusive-design__container__card-item__image">
                            <img src={portfolioData && portfolioData[2]?.posterImage[0]?.url} alt="" />
                        </div>
                    </div>
                </Link>
                <Link to="/work" 
                    onMouseMove={() => (onViewButton(), setCardIndex(3))}
                    onMouseOut={offViewButton}
                >
                    <div className="exclusive-design__container__card-item">
                        <div className="exclusive-design__container__card-item__title-and-desc">
                            <h1>{categoryNameData && categoryNameData[3]?.categoryName}</h1>
                        </div>
                        <div className="exclusive-design__container__card-item__image">
                            <img src={portfolioData && portfolioData[3]?.posterImage[0]?.url} alt="" />
                        </div>
                    </div>
                </Link>
                <Link to="/work" 
                    onMouseMove={() => (onViewButton(), setCardIndex(3))}
                    onMouseOut={offViewButton}
                >
                    <div className="exclusive-design__container__card-item">
                        <div className="exclusive-design__container__card-item__title-and-desc">
                            <h1>{categoryNameData && categoryNameData[4]?.categoryName}</h1>
                        </div>
                        <div className="exclusive-design__container__card-item__image">
                            <img src={portfolioData && portfolioData[4]?.posterImage[0]?.url} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default ExclusiveDesigns;