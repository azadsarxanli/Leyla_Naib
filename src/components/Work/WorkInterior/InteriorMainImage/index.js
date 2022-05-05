import "./InteriorMainImage.scss";

const InteriorMainImage = ({ work }) => {
  return (
    <section className="main-img-container">
      <img
        src={work.response?.content.headerImage[0].url}
        alt=""
      />
      <p>{work.response?.title}</p>
    </section>
  );
};

export default InteriorMainImage;