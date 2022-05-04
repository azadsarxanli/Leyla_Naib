import { useState } from "react";
import "./InteriorDesigns.scss";
import designsData from "./designs-data.json";
import designImg1 from "../../../../assets/images/design-img-1.png";
import designImg2 from "../../../../assets/images/design-img-2.png";
import designImg3 from "../../../../assets/images/design-img-3.png";

const InteriorDesigns = ({ work }) => {
  const [designsImgData, setDesignImgData] = useState(designsData);
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
