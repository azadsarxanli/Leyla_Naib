import "./InteriorMainImage.scss";
import fullSizeImg from "../../../../assets/images/full-img.png";
import fullImgMobile from "../../../../assets/images/full-img-mobile.png";

const InteriorMainImage = ({ work }) => {
  return (
    <section className="main-img-container">
      <img
        className="main-img-container__for-desktop"
        src={work.response?.content.headerImage[0].url}
        alt=""
      />
      <img
        className="main-img-container__for-mobile"
        src={work.response?.content.headerImage[0].url}
        alt=""
      />
      <p>{work.response?.title}</p>
    </section>
  );
};

export default InteriorMainImage;
