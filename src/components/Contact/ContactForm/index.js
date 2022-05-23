import { useEffect, useRef, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);

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
    phone: true,
    email: true,
    message: true,
  });

  const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
  const onSubmitForm = () => {
    // email validation
    if (inputs.email.length === 0) {
      setType((param) => ({
        ...param,
        email: false,
      }));
    } else if (!emailRegex.test(inputs.email)) {
      setType((param) => ({
        ...param,
        email: false,
      }));
    } else if (inputs.email.length !== 0) {
      setType((param) => ({
        ...param,
        email: true,
      }));
    }

    // message validation
    if (inputs.message.length === 0) {
      setType((param) => ({
        ...param,
        message: false,
      }));
    } else if (inputs.message.length !== 0) {
      setType((param) => ({
        ...param,
        message: true,
      }));
    }

    // phone validation
    if (inputs.phone.length === 0) {
      setType((param) => ({
        ...param,
        phone: false,
      }));
    } else if (inputs.phone.length !== 0) {
      setType((param) => ({
        ...param,
        phone: true,
      }));
    }
    
    setIsSubmit(true);
  };


  useEffect(() => {
    if (isSubmit && type.phone && type.email && type.message) {
      axios.post("http://localhost:3001/api/form", inputs)
        .then(res => {})
      setIsSubmit(false);
      inputs.phone = "";
      inputs.email = "";
      inputs.message = "";
    }
  }, [isSubmit, type.phone, type.email, type.message])

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
    <div className="contact__details__messagge-send-part__your-info">
      {type.email && type.message && type.phone ? <></> : <p>*Error</p>}
      <div className="contact__details__messagge-send-part__your-info__enter-part">
        <input
          type="number"
          inputMode="numeric"
          autoComplete="tel"
          value={inputs.phone}
          name="phone"
          className={type.phone ? "success" : "error"}
          placeholder="Phone"
          onChange={onInputsChangeHandler}
          enterKeyHint="next"
        />
        <input
          type="email"
          autoComplete="email"
          inputMode="email"
          value={inputs.email}
          className={type.email ? "success" : "error"}
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
          className={type.message ? "success" : "error"}
          onChange={onInputsChangeHandler}
          enterKeyHint="done"
        />
      </div>
      <button onClick={onSubmitForm}>Send</button>
    </div>
  );
};

export default ContactForm;
