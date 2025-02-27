import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/me.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Motivated Information Technology professional with a comprehensive
              foundation in software development, network administration, and
              database management. Skilled in web development technologies
              including HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.
              Proficient in programming languages Java and JavaScript, with
              hands-on experience in MySQL database management
            </p>
            <p>
              Motivated Information Technology professional with a comprehensive
              foundation in software development, network administration, and
              database management. Skilled in web development technologies
              including HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.
              Proficient in programming languages Java and JavaScript, with
              hands-on experience in MySQL database management
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "90%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>tailwind css</p> <hr style={{ width: "80%" }}></hr>
            </div>
            <div className="about-skill">
              <p>Bootstrap</p> <hr style={{ width: "60%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
