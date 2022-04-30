import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import "./styles/styles.scss";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Work from "./components/Work";
import WorkInterior from "./components/WorkInterior";
import ViewButton from "./components/ViewButton";
import Blog from "./components/Blog";
import Service from "./components/Service";
import BlogInterior from "./components/BlogInterior";
import Contact from "./components/Contact";

const App = () => {
  const [cursor, setCursor] = useState(false);
  //Tehran
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => {
    setCursor(true);
  };
  const onMouseLeave = () => {
    setCursor(false);
  };

  //Tehran

  const onMouseMove = () => {
    setHover(true);
  };
  const onMouseOut = () => {
    setHover(false);
  };
  const [windowScrollY, setWindowScrollY] = useState(0);
  // console.log(windowScrollY);

  window.addEventListener(
    "scroll",
    function () {
      setWindowScrollY(window.scrollY);
    },
    true
  );
  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  return (
    <>
      <Header
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        windowScrollY={windowScrollY}
      />
      {!matchMedia ? <CustomCursor cursor={cursor} /> : <></>}

      <ViewButton hover={hover} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
              windowScrollY={windowScrollY}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/work"
          element={<Work onMouseMove={onMouseMove} onMouseOut={onMouseOut} />}
        ></Route>
        <Route path="/work-interior" element={<WorkInterior />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="blog-interior" element={<BlogInterior />}></Route>
        <Route path="service" element={<Service />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        {/* // for not found page*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
