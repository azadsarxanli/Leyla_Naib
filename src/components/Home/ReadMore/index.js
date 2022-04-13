import { useState } from 'react';
import './ReadMore.scss';
import readMoreData from './ReadMore.json';

const ReadMore = () => {
    const [moreData, setMoreData] = useState(readMoreData);
    
    return (
        <section className="read-more">
            {moreData.map((data, index) => (
                <div key={index} className="read-more__container">
                    <div className="read-more__container__image">
                        <img src={data.src} alt="" />
                    </div>
                    <div className="read-more__container__description">
                        <p><span>{data.bottomLineDesc}</span> {data.description}</p>
                        <div className="read-more-btn">
                            <button>Read more</button>
                        </div>
                        <h2>{data.title}</h2>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default ReadMore;