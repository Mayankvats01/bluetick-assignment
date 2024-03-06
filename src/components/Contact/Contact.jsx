import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Let's Connect</span>
          <span>Contact our support team or make an appointment with our experts.</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form}>
          <input type="text" name="user_name" className="user"  placeholder="Full Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <input type="number" name="user_contact" className="user" placeholder="Contact"/>
          <input type="text" name="user_subject" className="user" placeholder="Subject"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Submit Form" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
