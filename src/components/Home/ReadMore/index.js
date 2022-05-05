import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./ReadMore.scss";

const ReadMore = () => {
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;
  const navigate = useNavigate();

  const onViewButton = () => {
    if (!matchMedia) {
      document.getElementById("view-button-id").classList.add("white-view-button");
      document.getElementById("view-button-id").classList.add("hover");
    }
  }
  const offViewButton = () => {
    if (!matchMedia) {
      document.getElementById("view-button-id").classList.remove("hover");
    }
  }

  const [onHoveButton, setOnHoveButton] = useState(false);
  useEffect(() => {
    if (!matchMedia) {
      if (onHoveButton) {
        document.getElementById("view-button-id").style.display = "none";
      } else if (!onHoveButton) {
        document.getElementById("view-button-id").style.display = "flex";
      }
    }
  }, [onHoveButton])

  const [blogDataHome, setBlogDataHome] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/api/blog")
      .then(res => setBlogDataHome(res.data.result.splice(0, 2)))
  }, [])

  return (
    <section
      className="read-more"
    >
      {blogDataHome.map((blodData, index) => (
        <div className="read-more__container"
          key={index}
          onMouseMove={onViewButton}
          onMouseOut={offViewButton} 
          onClick={() => navigate("/blog")}
        >
          <div className="read-more__container__image">
            <img src={blodData?.posterImage[0].url} alt="" />
          </div>
          <div className="read-more__container__description">
            <p>
              <span></span> {blodData?.description}
            </p>
            <div className="read-more__container__description__title-and-btn-container">
              <div className="read-more-btn">
                <Link
                  to={`/blog/interior/${blogDataHome[0]?._id}`}
                >
                  <button 
                    onMouseEnter={() => setOnHoveButton(true)}
                    onMouseLeave={() => setOnHoveButton(false)}
                  >Read more</button>
                </Link>
              </div>
              <h2>{blodData?.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ReadMore;
