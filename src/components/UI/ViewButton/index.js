import { useEffect, useRef, useState } from "react";
import "./ViewButton.scss";

const ViewButton = ({}) => {
  const [hover, setHover] = useState(false);
  console.log(hover, "button");
  const viewBtn = useRef();
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  useEffect(() => {
    if (!matchMedia) {
      document.addEventListener("mousemove", (event) => {
        if (viewBtn.current) {
          viewBtn.current.style.top = event.clientY + 15 + "px";
          viewBtn.current.style.left = event.clientX - 90 + "px";
        }
      });

      // return () => {};
    }
  }, [viewBtn]);

  return !matchMedia ? (
    <div className={hover ? "view-button hover " : "view-button"} ref={viewBtn}>
      <p>VIEW</p>
      <svg viewBox="0 0 57 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.5303 6.53034C56.8232 6.23744 56.8232 5.76257 56.5303 5.46967L51.7574 0.696704C51.4645 0.40381 50.9896 0.40381 50.6967 0.696704C50.4038 0.989597 50.4038 1.46447 50.6967 1.75736L54.9393 6L50.6967 10.2426C50.4038 10.5355 50.4038 11.0104 50.6967 11.3033C50.9896 11.5962 51.4645 11.5962 51.7574 11.3033L56.5303 6.53034ZM-6.55671e-08 6.75L56 6.75L56 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z" />
      </svg>
    </div>
  ) : (
    <></>
  );
};

export default ViewButton;
