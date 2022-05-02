import './InteriorMainImage.scss';
import fullSizeImg from '../../../../assets/images/full-img.png';
import fullImgMobile from '../../../../assets/images/full-img-mobile.png';

const InteriorMainImage = () => {
    return (
        <section className="main-img-container">
            <img className="main-img-container__for-desktop" src={fullSizeImg} alt="" />
            <img className="main-img-container__for-mobile" src={fullImgMobile} alt="" />
            <p>Purus eget molestie urna</p>
        </section>
    )
}

export default InteriorMainImage;