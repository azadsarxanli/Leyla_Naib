import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import ContactForm from "./ContactForm";

const Contact = ({ homeActive, setHomeActive }) => {
  useEffect(() => {
    if (homeActive) {
      setHomeActive(false);
    }
  }, [homeActive])

  useEffect(() => {
    if (window.location.href.includes("contact")) {
      const body = document.body;
      const header = body.querySelector("header");
      if (!body.className) {
        header.className = "header";
        body.classList.add("background-color-white");
        header.classList.add("background-color-white");
      }
      return () => {
        body.className = "";
        header.classList.remove("background-color-white");
      };
    }
  });
  let matchMedia = window.matchMedia("(max-width: 486px)").matches;

  return (
    <section className="contact">
      <p className="contact__work-together">let’s work together</p>
      <div className="contact__details">
        <h1>contact us</h1>
        <p className="contact__details__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis nunc
          leo sed lectus fringilla tincidunt sed enim. Netus enim augue
          facilisis faucibus amet.
        </p>
        <div className="contact__details__messagge-send-part">
          <div className="contact__details__messagge-send-part__contact-info">
            <p>(+994 50) 222 21 11</p>
            <p>high.interiordesignn@gmail.com</p>
          </div>
          <ContactForm />
        </div>
        {matchMedia ? (
          <div className="contact__details__social">
            <Link to="instagram">INSTAGRAM</Link>
            <Link to="instagram">FACEBOOK</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Contact;
