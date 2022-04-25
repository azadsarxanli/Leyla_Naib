import React, { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import "./styles/styles.scss";
import About from "./components/About";
import NotFound from "./components/NotFound";

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
        <Route
          path="/"
          element={<Home windowScrollY={windowScrollY} />}
        ></Route>
        <Route path="about" element={<About />}></Route>
        {/* // for not found page*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
