import { useEffect, useState } from "react";
import axios from "axios";
import "./LeylaAbout.scss";
import leylaPhoto from "../../../assets/images/leila-photo.png";
import quoteIcon from "../../../assets/images/quote.png";
import triangle from "../../../assets/images/triangle-home.png";

const LeylaAbout = () => {
  const [aboutLeila, setAboutLeila] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/main")
      .then(res => setAboutLeila(res.data.result))
  }, [])

  return (
    <section className="leila-about">
      <div className="leila-about__image">
      <img src={aboutLeila[0]?.image[0].url} alt="Leila Image" />
      </div>
      <div className="leila-about__description">
        <div className="leila-about__description__texts">
          <img src={quoteIcon} alt="" />
          <p>{aboutLeila[0]?.quote}</p>
          <h1>{aboutLeila[0]?.title}</h1>
        </div>
        <div className="leila-about__description__triangle">
          <div className="leila-about__description__triangle__image">
            <img src={triangle} alt="" />
          </div>
          <h1>{aboutLeila[0]?.title}</h1>
        </div>
      </div>
    </section>
  );
};

export default LeylaAbout;
