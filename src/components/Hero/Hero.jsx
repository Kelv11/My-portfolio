import React from "react";
import "./Hero.css";
import me from "../../assets/pug.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myresume from "../../assets/myresume.pdf";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={me} alt="" />
      <h1>
        <span>I'm Kev,</span> A software developer based in Nairobi, Kenya
      </h1>
      <p>
        Motivated Information Technology professional with a comprehensive
        foundation in software development, network administration, and database
        management. Skilled in web development technologies including HTML, CSS,
        JavaScript, Bootstrap, and Tailwind CSS. Proficient in programming
        languages Java and JavaScript, with hands-on experience in MySQL
        database management
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect{" "}
          </AnchorLink>{" "}
        </div>
        <a href={myresume} download="Kev_Resume.pdf" className="hero-resume">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
