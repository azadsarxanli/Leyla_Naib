import './InteriorMainImage.scss';
import fullSizeImg from '../../../assets/images/full-img.png';

const InteriorMainImage = () => {
    return (
        <section className="main-img-container">
            <img src={fullSizeImg} alt="" />
            <p>Purus eget molestie urna</p>
        </section>
    )
}

export default InteriorMainImage;