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
    console.log("first");

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
      console.log(type.email, "email");
    }
    if (inputs.phone.length === 0) {
      setType((param) => ({
        ...param,
        phone: true,
      }));
      console.log(type.phone, "phone");
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
  //   const onSubmitForm = () => {
  //     if (
  //       inputs.email.length <= 0 ||
  //       inputs.phone.length <= 0 ||
  //       inputs.message.length <= 0
  //     ) {
  //       if (inputs.email.length <= 0) {
  //         setType((param) => ({
  //           ...param,
  //           email: true,
  //         }));
  //         console.log(type.email, "email");
  //       }
  //       if (inputs.message.length <= 0) {
  //         setType((param) => ({
  //           ...param,
  //           message: true,
  //         }));
  //         console.log(type.message, "message");
  //       }
  //       if (inputs.phone.length <= 0) {
  //         setType((param) => ({
  //           ...param,
  //           phone: true,
  //         }));
  //         console.log(type.phone, "phone");
  //       }
  //     } else {
  //       setType({
  //         phone: inputs.phone.length <= 0,
  //         email: inputs.email.length <= 0,
  //         message: inputs.message.length <= 0,
  //       });
  //     }
  //   };

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
                type="text"
                value={inputs.phone}
                name="phone"
                className={type.phone ? "error" : null}
                placeholder="Phone"
                onChange={onInputsChangeHandler}
              />
              <input
                type="text"
                value={inputs.email}
                className={type.email ? "error" : null}
                name="email"
                placeholder="Email"
                onChange={onInputsChangeHandler}
              />
              <input
                type="text"
                value={inputs.message}
                name="message"
                placeholder="Message"
                className={type.message ? "error" : null}
                onChange={onInputsChangeHandler}
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
