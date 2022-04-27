import { useEffect, useState } from "react";
import "./Contact.scss";

const Contact = () => {
  const [inputs, setInputs] = useState({
    phone: "",
    email: "",
    message: "",
  });
  const onInputsChangeHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };
  const [type, setType] = useState({
    phone: false,
    email: false,
    message: false,
  });
  const onSubmitForm = () => {
    if (inputs.email.length === 0) {
      setType((param) => ({
        ...param,
        email: true,
      }));
    }
    if (inputs.message.length === 0) {
      setType((param) => ({
        ...param,
        message: true,
      }));
    }
    if (inputs.phone.length === 0) {
      setType((param) => ({
        ...param,
        phone: true,
      }));
    }
    if (inputs.email.length !== 0) {
      setType((param) => ({
        ...param,
        email: false,
      }));
    }
    if (inputs.phone.length !== 0) {
      setType((param) => ({
        ...param,
        phone: false,
      }));
    }
    if (inputs.message.length !== 0) {
      setType((param) => ({
        ...param,
        message: false,
      }));
    }
  };
  function addDashesToNumber(number) {
    const numWithoutDashes = number.replace(/[^0-9]/g, "");
    if (numWithoutDashes.length > 10) return number.slice(0, -1);
    const dashPlaces = [3, 6];
    return numWithoutDashes
      .split("")
      .reduce(
        (acc, curr, i) =>
          dashPlaces.includes(i) ? [...acc, "-", curr] : [...acc, curr],
        []
      )
      .join("");
  }

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
          <div className="contact__details__messagge-send-part__your-info">
            {type.email || type.message || type.phone ? <p>*Error</p> : <></>}
            <div className="contact__details__messagge-send-part__your-info__enter-part">
              <input
                type="number"
                inputMode="numeric"
                autoComplete="tel"
                value={inputs.phone}
                name="phone"
                className={type.phone ? "error" : null}
                placeholder="Phone"
                onChange={onInputsChangeHandler}
                enterKeyHint="next"
              />
              <input
                type="email"
                autoComplete="email"
                inputMode="email"
                value={inputs.email}
                className={type.email ? "error" : null}
                name="email"
                placeholder="Email"
                onChange={onInputsChangeHandler}
                enterKeyHint="next"
              />
              <input
                type="text"
                inputMode="text"
                autoComplete="text"
                value={inputs.message}
                name="message"
                placeholder="Message"
                className={type.message ? "error" : null}
                onChange={onInputsChangeHandler}
                enterKeyHint="done"
              />
            </div>
            <button onClick={onSubmitForm}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
