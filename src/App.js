import React from "react";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import "./styles/styles.scss";

const App = () => {
  return (
    <>
      <Header />
      <CustomCursor />
      <Home />
      <Footer />
    </>
  );
};

export default App;
