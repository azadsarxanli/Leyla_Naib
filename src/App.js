import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/";
import "./styles/styles.scss";
import About from "./components/About/About";
import NotFound from "./components/NotFound";
import Work from "./components/Work/Work";
import WorkInterior from "./components/WorkInterior/WorkInterior";

const App = () => {
  const [cursor, setCursor] = useState(false);
  const onMouseEnter = () => {
    setCursor(true);
  };
  const onMouseLeave = () => {
    setCursor(false);
  };

  const [windowScrollY, setWindowScrollY] = useState(0);
  document.onscroll = () => {
    setWindowScrollY(window.scrollY);
    console.log("helli");
  };

  return (
    <>
      <Header
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        windowScrollY={windowScrollY}
      />
      <CustomCursor cursor={cursor} />
      <Routes>
        {/* // Use it in this way, and it should work: */}
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={<Home windowScrollY={windowScrollY} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/work-interior" element={<WorkInterior />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
