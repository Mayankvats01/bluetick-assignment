import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
      <div className="f-up">
        <div className="f-left">
            <h2>Bluetick <br></br>Consultants</h2>
            <span>contact@bluetickconsultants.com</span>
          
        </div>
        <div className="f-right">
          <div className="f-int">
            <h5>Resources</h5>
            <div className="f-intdown">
            <p>Blogs</p>
            </div>  
          </div>

          <div className="f-int">
            <h5>Products</h5>
            <div className="f-intdown">
            <p>Talk To Code</p>
            <p>Privacy Doc</p>
            <p>Sales Call Evaluator</p>
            </div>  
          </div>
          
        </div>
      </div>
      <div className="f-down">
        <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <Facebook color="white" size={"3rem"} />
            <Gitub color="white" size={"3rem"} />
          </div>
          <p>2024 © All rights reserved by Bluetick Consultants LLP</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
