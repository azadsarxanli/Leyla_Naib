import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/styles.scss";
import CustomCursor from "./components/UI/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import "./styles/styles.scss";
import About from "./components/About";
import NotFound from "./components/UI/NotFound";
import Work from "./components/Work";
import WorkInterior from "./components/Work/WorkInterior";
import ViewButton from "./components/UI/ViewButton";
import Blog from "./components/Blog";
import Service from "./components/Service";
import BlogInterior from "./components/Blog/BlogInterior";
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

  const [homeActive, setHomeActive] = useState(false);

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  return (
    <>
      <Header
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        // windowScrollY={windowScrollY}
        homeActive={homeActive}
      />
      {!matchMedia ? <CustomCursor cursor={cursor} /> : <></>}

      <ViewButton hover={hover} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              // windowScrollY={windowScrollY}
              homeActive={homeActive}
              setHomeActive={setHomeActive}
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
            />
          }
        ></Route>
        <Route path="/about" 
          element={
            <About 
              homeActive={homeActive} 
              setHomeActive={setHomeActive} />
          }
        ></Route>
        <Route
          path="/work"
          element={
            <Work 
              onMouseMove={onMouseMove} 
              onMouseOut={onMouseOut} 
              homeActive={homeActive}
              setHomeActive={setHomeActive} 
            />
          }
        ></Route>
        <Route path="/work/interior" element={<WorkInterior homeActive={homeActive} setHomeActive={setHomeActive} />}></Route>
        <Route path="/blog" element={<Blog homeActive={homeActive} setHomeActive={setHomeActive} />}></Route>
        <Route path="/blog/interior/:id" element={<BlogInterior homeActive={homeActive} setHomeActive={setHomeActive} />}></Route>
        <Route path="/service" element={<Service homeActive={homeActive} setHomeActive={setHomeActive} />}></Route>
        <Route path="/contact" element={<Contact homeActive={homeActive} setHomeActive={setHomeActive} />}></Route>
        {/* // for not found page*/}
        <Route path="*" element={<NotFound homeActive={homeActive} setHomeActive={setHomeActive} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
