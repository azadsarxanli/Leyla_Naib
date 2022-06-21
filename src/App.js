import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/UI/CustomCursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/UI/NotFound";
import Work from "./components/Work";
import WorkInterior from "./components/Work/WorkInterior";
import ViewButton from "./components/UI/ViewButton";
import Blog from "./components/Blog";
import Service from "./components/Service";
import BlogInterior from "./components/Blog/BlogInterior";
import Contact from "./components/Contact";
import PageScrollTop from "./components/UI/PageScrollTop/PageScrollTop";
import "./styles/styles.scss";

const App = () => {
  const [cursor, setCursor] = useState(false);

  const onMouseEnter = () => {
    setCursor(true);
  };
  const onMouseLeave = () => {
    setCursor(false);
  };

  const [homeActive, setHomeActive] = useState(false);

  let matchMedia = window.matchMedia("(max-width: 991px)").matches;

  return (
    <>
      <PageScrollTop />
      <Header
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        homeActive={homeActive}
      />
      {!matchMedia ? <CustomCursor cursor={cursor} /> : <></>}

      <ViewButton />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeActive={homeActive}
              setHomeActive={setHomeActive}
            />
          }
        ></Route>
        <Route
          path="/about"
          element={
            <About homeActive={homeActive} setHomeActive={setHomeActive} />
          }
        ></Route>
        <Route
          path="/work"
          element={
            <Work homeActive={homeActive} setHomeActive={setHomeActive} />
          }
        ></Route>
        <Route
          path="/work/interior/:id"
          element={
            <WorkInterior
              homeActive={homeActive}
              setHomeActive={setHomeActive}
            />
          }
        ></Route>
        <Route
          path="/blog"
          element={
            <Blog homeActive={homeActive} setHomeActive={setHomeActive} />
          }
        ></Route>
        <Route
          path="/blog/interior/:id"
          element={
            <BlogInterior
              homeActive={homeActive}
              setHomeActive={setHomeActive}
            />
          }
        ></Route>
        <Route
          path="/services"
          element={
            <Service homeActive={homeActive} setHomeActive={setHomeActive} />
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <Contact homeActive={homeActive} setHomeActive={setHomeActive} />
          }
        ></Route>
        {/* // for not found page*/}
        <Route
          path="*"
          element={
            <NotFound homeActive={homeActive} setHomeActive={setHomeActive} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
