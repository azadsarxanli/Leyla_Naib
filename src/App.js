import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";

import "./styles/styles.scss";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Work from "./components/Work/Work";
import WorkInterior from "./components/WorkInterior/WorkInterior";
import ViewButton from "./components/ViewButton";

const App = () => {
  const [cursor, setCursor] = useState(false);
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setCursor(true);
  };
  const onMouseLeave = () => {
    setCursor(false);
  };

  const onMouseMove = () => {
    setHover(true);
  }
  const onMouseOut = () => {
    setHover(false);
  }


  const [windowScrollY, setWindowScrollY] = useState(0);
  document.onscroll = () => {
    setWindowScrollY(window.scrollY);
  };

  return (
    <>
      <Header
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        windowScrollY={windowScrollY}
      />
      <CustomCursor cursor={cursor} />
      <ViewButton hover={hover} />
      <Routes>
        <Route
          path="/"
          element={<Home onMouseMove={onMouseMove} onMouseOut={onMouseOut} windowScrollY={windowScrollY} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route 
          path="/work" 
          element={<Work onMouseMove={onMouseMove} onMouseOut={onMouseOut} />}
        ></Route>
        <Route path="/work-interior" element={<WorkInterior />}></Route>
        <Route path="about" element={<About />}></Route>
        {/* // for not found page*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
