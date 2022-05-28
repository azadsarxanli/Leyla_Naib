import "./InteriorMainImage.scss";

const InteriorMainImage = ({ work }) => {
  return (
    <section className="main-img-container">
      <img src={work.response && work.response.posterImage[0].url} alt="" />
      <p>{work.response && work.response.title}</p>
    </section>
  );
};

export default InteriorMainImage;