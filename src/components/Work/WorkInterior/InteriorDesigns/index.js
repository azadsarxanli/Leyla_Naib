import "./InteriorDesigns.scss";

const InteriorDesigns = ({ work }) => {
  return (
    <section className="interior-designs">
      <div className="interior-designs__img-container">
        <div className="interior-designs__img-container__image">
          {work.response?.content.imageAfterParagraph?.map((item, index) => (
            <img key={index} src={item.url} alt="" />
          ))}
        </div>
      </div>
      <div className="interior-designs__text-container">
        <p>{work.response?.content.quote}</p>
      </div>
    </section>
  );
};

export default InteriorDesigns;
