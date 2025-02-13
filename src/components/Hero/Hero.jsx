import React from "react";
import "./Hero.css";
import me from "../../assets/pug.png";

const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-connect">Connect</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
