import "./LeylaAbout.scss";
import quoteIcon from "../../../assets/images/quote.png";
import triangle from "../../../assets/images/triangle-home.png";

const LeylaAbout = ({ aboutData }) => {
  return (
    <section className="leila-about">
      <div className="leila-about__image"> 
          <img src={aboutData.headerImage?.url} alt="Leila Image" />
      </div>
      <div className="leila-about__description">
        <div className="leila-about__description__texts">
          <img src={quoteIcon} alt="" />
          <p>{aboutData?.quote}</p>
          <h1>{aboutData?.title}</h1>
        </div>
        <div className="leila-about__description__triangle">
          <div className="leila-about__description__triangle__image">
            <img src={triangle} alt="" />
          </div>
          <h1>{aboutData?.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default LeylaAbout;
