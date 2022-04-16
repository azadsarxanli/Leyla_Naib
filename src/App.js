import React from "react";
import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import "./styles/styles.scss";

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
      <Home />
      <Footer />
    </>
  );
};

export default App;
