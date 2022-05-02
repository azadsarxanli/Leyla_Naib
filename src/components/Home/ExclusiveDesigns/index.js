import './ExclusiveDesigns.scss';
import imageOne from '../../../assets/images/img-one.png';
import imageTwo from '../../../assets/images/img-two.png';
import imageThree from '../../../assets/images/img-three.png';
import imageFour from '../../../assets/images/img-four.png';

const ExclusiveDesigns = ({ onMouseMove, onMouseOut }) => {
    return (
        <section className="exclusive-design">
            <div className="exclusive-design__container">
                <div className="exclusive-design__container__card-item" onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
                    <div className="exclusive-design__container__card-item__title-and-desc">
                        <h1>Exclusive decor</h1>
                        <p className="description">Jåledes. Tehörat. Peng. Bijåment. <br/> Bektig. Semiheten. Tivuning.</p>
                    </div>
                    <div className="exclusive-design__container__card-item__image">
                        <img src={imageOne} alt="" />
                    </div>
                </div>
                <div className="exclusive-design__container__card-item" onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
                    <div className="exclusive-design__container__card-item__title-and-desc">
                        <h1>Interior</h1>
                        <p>Jåledes. Tehörat. Peng. Bijåment. <br/> Bektig. Semiheten. Tivuning.</p>
                    </div>
                    <div className="exclusive-design__container__card-item__image">
                        <img src={imageTwo} alt="" />
                    </div>
                </div>
                <div className="exclusive-design__container__card-item" onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
                    <div className="exclusive-design__container__card-item__title-and-desc">
                        <h1>Exterior</h1>
                        <p>Jåledes. Tehörat. Peng. Bijåment. <br/> Bektig. Semiheten. Tivuning.</p>
                    </div>
                    <div className="exclusive-design__container__card-item__image">
                        <img src={imageThree} alt="" />
                    </div>
                </div>
                <div className="exclusive-design__container__card-item" onMouseMove={onMouseMove} onMouseOut={onMouseOut}>
                    <div className="exclusive-design__container__card-item__title-and-desc">
                        <h1>Landscape</h1>
                        <p>Jåledes. Tehörat. Peng. Bijåment. <br/> Bektig. Semiheten. Tivuning.</p>
                    </div>
                    <div className="exclusive-design__container__card-item__image">
                        <img src={imageFour} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExclusiveDesigns;