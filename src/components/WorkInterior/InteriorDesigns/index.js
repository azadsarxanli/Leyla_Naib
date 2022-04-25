import { useState } from 'react';
import './InteriorDesigns.scss';
import designsData from './designs-data.json';
import designImg1 from '../../../assets/images/design-img-1.png';
import designImg2 from '../../../assets/images/design-img-2.png';
import designImg3 from '../../../assets/images/design-img-3.png';

const InteriorDesigns = () => {
    const [designsImgData, setDesignImgData] = useState(designsData);

    return (
        <section className="interior-designs">
            {designsImgData.map((designsData, index) => (
                <div className="interior-designs__container" key={index}>
                    <img src={designsData.src} alt="" />
                    <p>{designsData.desc}</p>
                </div>
            ))}
        </section>
    )
}

export default InteriorDesigns;