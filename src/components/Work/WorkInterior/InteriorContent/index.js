import "./InteriorContent.scss";

const InteriorContent = ({ work }) => {
  return (
    <section className="interior-content">
      <p>{work.response && work.response.description}</p>
      <p>{work.response && work.response.description}</p>
    </section>
  );
};

export default InteriorContent;