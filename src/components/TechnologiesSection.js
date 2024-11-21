import React from "react";
import "./TechnologiesStyles.css";
import javapic from "../assets/Java.png";
import springpic from "../assets/Spring.png";
import sqlpic from "../assets/Azure SQL Database.png";
import mongodbpic from "../assets/MongoDB.png";
import htmlpic from "../assets/HTML5.png";
import csspic from "../assets/CSS3.png";
import vspic from "../assets/Visual Studio Code (VS Code).png";
import umlpic from "../assets/Unified Modelling Language (UML).png";
import intelliJpic from "../assets/intelliJ.png";
import officepic from "../assets/office.png";

const TechnologiesSection = () => {
  return (
    <div className="tech-section-container">
      <div className="techheading">
        <h2>Technologies that i know</h2>
      </div>
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <img src={javapic} alt="java" />
          </div>
          <div className="slide">
            <img src={springpic} alt="spring" />
          </div>
          <div className="slide">
            <img src={sqlpic} alt="sql" />
          </div>
          <div className="slide">
            <img src={mongodbpic} alt="mongodb" />
          </div>
          <div className="slide">
            <img src={htmlpic} alt="html" />
          </div>
          <div className="slide">
            <img src={csspic} alt="css" />
          </div>
          <div className="slide">
            <img src={vspic} alt="vscode" />
          </div>
          <div className="slide">
            <img src={umlpic} alt="uml" />
          </div>
          <div className="slide">
            <img src={intelliJpic} alt="intelliJ" />
          </div>
          <div className="slide">
            <img src={officepic} alt="office" />
          </div>

          <div className="slide">
            <img src={javapic} alt="java" />
          </div>
          <div className="slide">
            <img src={springpic} alt="spring" />
          </div>
          <div className="slide">
            <img src={sqlpic} alt="sql" />
          </div>
          <div className="slide">
            <img src={mongodbpic} alt="mongodb" />
          </div>
          <div className="slide">
            <img src={htmlpic} alt="html" />
          </div>
          <div className="slide">
            <img src={csspic} alt="css" />
          </div>
          <div className="slide">
            <img src={vspic} alt="vscode" />
          </div>
          <div className="slide">
            <img src={umlpic} alt="uml" />
          </div>
          <div className="slide">
            <img src={intelliJpic} alt="intelliJ" />
          </div>
          <div className="slide">
            <img src={officepic} alt="office" />
          </div>

          <div className="slide">
            <img src={javapic} alt="java" />
          </div>
          <div className="slide">
            <img src={springpic} alt="spring" />
          </div>
          <div className="slide">
            <img src={sqlpic} alt="sql" />
          </div>
          <div className="slide">
            <img src={mongodbpic} alt="mongodb" />
          </div>
          <div className="slide">
            <img src={htmlpic} alt="html" />
          </div>
          <div className="slide">
            <img src={csspic} alt="css" />
          </div>
          <div className="slide">
            <img src={vspic} alt="vscode" />
          </div>
          <div className="slide">
            <img src={umlpic} alt="uml" />
          </div>
          <div className="slide">
            <img src={intelliJpic} alt="intelliJ" />
          </div>
          <div className="slide">
            <img src={officepic} alt="office" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
