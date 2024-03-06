
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import robo from "../../img/robo-friend.png";
import rab from "../../img/rab.png";
import glassesimoji from "../../img/glassesimoji.png";
import privacy from "../../img/privacy-doc.png";
import robot from "../../img/robot-call3.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Transforming Enterprises</span>
          <span>with cutting-edge, scalable, privacy-focused Generative AI Solutions</span>
          <span>
          Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
          significant impact in the Indian and US startup ecosystems.
          </span>
        </div>
        
        <button onClick={event =>  window.location.href='https://www.bluetickconsultants.com/generative-ai.html'} className="button i-button">To know more about us</button>
        
        
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={robo} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={rab}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={robot} text1="Sales Call" text2="Evaluator" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={privacy} text1="Privacy Doc" text2="" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
