import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.repo_link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
            >
              <img src={work.w_img} alt={work.w_name} />
              <div className="work-overlay">
                <h3>{work.w_name}</h3>
                <p>{work.description}</p>
              </div>
            </a>
          );
        })}
      </div>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="mywork-showmore-link"
      >
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default MyWork;
