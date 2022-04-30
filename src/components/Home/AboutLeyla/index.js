import "./AboutLeyla.scss";
import leylaPhoto from "../../../assets/images/leila-photo.png";
import quoteIcon from "../../../assets/images/quote.png";
import triangle from "../../../assets/images/triangle-home.png";

const AboutLeyla = () => {
  return (
    <section className="about-leila">
      <div className="about-leila__image">
        <img src={leylaPhoto} alt="" />
      </div>
      <div className="about-leila__description">
        <div className="about-leila__description__texts">
          <img src={quoteIcon} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tortor id ut a tempor. In aliquam amet est mauris velit, venenatis
            tempor proin. Ultrices in phasellus suspendisse et, urna. Fermentum
            elementum aliquam mattis luctus. Eu orci aliquam tincidunt enim.
            Facilisis odio eget morbi at nulla nisi. Mauris, ipsum convallis
            diam gravida tristique. Luctus aliquam in a tristique.
          </p>
        </div>
        <div className="about-leila__description__triangle">
          <div className="about-leila__description__triangle__image">
            <img src={triangle} alt="" />
          </div>
          <h1 className="about-leila__h1">Leyla Naib</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutLeyla;
