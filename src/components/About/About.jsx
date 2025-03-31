import React from "react";
import "./About.css";
import profile_img from "../../assets/me.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              As a recent Information Technology graduate from KCA University, I
              am passionate about leveraging my technical skills to create
              innovative software solutions. My academic foundation has equipped
              me with comprehensive knowledge in web development, programming,
              and database management, with hands-on experience in developing
              responsive websites and practical applications using technologies
              like JavaScript, Java, HTML, CSS, and MySQL.
            </p>
            <p>
              My professional journey is driven by a commitment to continuous
              learning and technological growth. I bring strong problem-solving
              skills, adaptability, and an eagerness to contribute to
              cutting-edge projects. Beyond coding, I find balance and
              inspiration through cycling, hiking, and adventure rides, which
              fuel my creativity and provide a refreshing perspective on
              challenges both in technology and in life.
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
