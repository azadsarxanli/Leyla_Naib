import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/";
import "./styles/styles.scss";
import About from "./components/About/About";
import NotFound from "./components/NotFound";

const App = () => {
  const [cursor, setCursor] = useState(false);
  const onMouseEnter = () => {
    setCursor(true);
  };
  const onMouseLeave = () => {
    setCursor(false);
  };
  return (
    <>
      <Header onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <CustomCursor cursor={cursor} />
      <Routes>
        {/* // Use it in this way, and it should work: */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
