import { useState } from 'react';
import './InteriorDesigns.scss';
import designsData from './designs-data.json';
import designImg1 from '../../../../assets/images/design-img-1.png';
import designImg2 from '../../../../assets/images/design-img-2.png';
import designImg3 from '../../../../assets/images/design-img-3.png';

const InteriorDesigns = () => {
    const [designsImgData, setDesignImgData] = useState(designsData);

    return (
        <section className="interior-designs">
            <div className="interior-designs__img-container" >
                <div className="interior-designs__img-container__image">
                    {designsImgData.map((designsData, index) => (
                        <img key={index} src={designsData.src} alt="" />
                    ))}
                </div>
            </div>
            <div className="interior-designs__text-container">
                {designsImgData.map((designsData, index) => (
                    <p key={index}>{designsData.desc}</p>
                ))}
            </div>
        </section>
    )
}

export default InteriorDesigns;