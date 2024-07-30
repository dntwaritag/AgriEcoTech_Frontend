import React from "react";
import { Link } from "react-router-dom";
import thumb from "/images/thumb45.jpg";
function About() {
  return (
    <div className="feature-about-wrapper">
      <div className="feature-about-content1">
        <img src={thumb} alt="" />
      </div>
      <div className="feature-about-content2">
        <h3>About AgrEcotech</h3>
        <p>
          AgriEcoTech is a new, self-contained product designed to enhance
          sustainable agricultural practices in Rwanda. It will interface with
          hardware components like IoT sensors and drones and software
          components like AI-based analytics tools
        </p>
        <Link className="read-more-1">
          {" "}
          Read More
        </Link>
      </div>
    </div>
  );
}

export default About;
