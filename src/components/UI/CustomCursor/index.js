import { useEffect, useRef } from "react";
import "./CustomCursor.scss";

const CustomCursor = ({ cursor }) => {
  const appCursor = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      if (appCursor.current) {
        appCursor.current.style.top = event.clientY + "px";
        appCursor.current.style.left = event.clientX + "px";
      }
    });

    return () => {};
  }, [appCursor]);

  return (
    <div
      className={cursor ? "app-cursor pointer" : "app-cursor"}
      ref={appCursor}
    ></div>
  );
};

export default CustomCursor;
