import "./InteriorContent.scss";

const InteriorContent = ({ work }) => {
  return (
    <section className="interior-content">
      <p>{work.response?.content.firstParagraphAfterHeader}</p>
      <p>{work.response?.content?.secondParagraphAfterHeader}</p>
    </section>
  );
};

export default InteriorContent;
