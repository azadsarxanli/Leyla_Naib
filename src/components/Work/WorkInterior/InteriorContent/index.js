import "./InteriorContent.scss";
import contentData from "./content-data.json";
import { useState } from "react";

const InteriorContent = ({ work }) => {
  return (
    <section className="interior-content">
      <p>{work.response?.content.firstParagraphAfterHeader}</p>
      <p>{work.response?.content?.secondParagraphAfterHeader}</p>
    </section>
  );
};

export default InteriorContent;
