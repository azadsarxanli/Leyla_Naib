import { useEffect, useState } from 'react';
import './ReadMore.scss';
import readMoreData from './ReadMore.json';
import sit from '../../../assets/images/sit-on-chair.png';
import sitt from '../../../assets/images/read-more.png';

const ReadMore = ({ onMouseMove, onMouseOut }) => {
    const [moreData, setMoreData] = useState(readMoreData);
    
    return (
        <section className="read-more" onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
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