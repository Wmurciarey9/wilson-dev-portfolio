import "./contact.scss";

import Phone from "../../components/images/phone.png";
import Email from "../../components/images/email.png";
import Address from "../../components/images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";
import { Navbar } from "../../components/navbar/Navbar";

import { Toggle } from "../../components/toggle/Toggle";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);

  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_v4l8fhq", "template_qc3ohqk", formRef.current, "u_grGElhpORT6KAhe")
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ backgroundColor: darkMode ? "#424242" : "", color: darkMode && "whitesmoke" }}>
      <Toggle />
      <Navbar />
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Get in touch!</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +57 316 868 9229
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                wmurciarey9@gmail.com
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Hey! Let's connect,</b> looking forward to hearing more from you.
            </p>
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                style={{
                  backgroundColor: darkMode ? "#424242" : "",
                  color: darkMode && "whitesmoke",
                }}
                type="text"
                placeholder="Name"
                name="fullName"
              />
              <input
                style={{
                  backgroundColor: darkMode ? "#424242" : "",
                  color: darkMode && "whitesmoke",
                }}
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <input
                style={{
                  backgroundColor: darkMode ? "#424242" : "",
                  color: darkMode && "whitesmoke",
                }}
                type="text"
                placeholder="Email"
                name="email"
              />
              <textarea
                style={{
                  backgroundColor: darkMode ? "#424242" : "",
                  color: darkMode && "whitesmoke",
                }}
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button>Submit</button>
              {done && "    Thank you... Your message has been sent"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
