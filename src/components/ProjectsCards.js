import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsCardsStyles.css";
import { SiJavascript, SiSpringboot } from "react-icons/si";
import { FaJava, FaHtml5, FaNode, FaCss3Alt } from "react-icons/fa";
import { RiH2 } from "react-icons/ri";

const ProjectsCards = () => {
  return (
    <div className="project-container">
      <h2 className="project-heading">Take a look at my projects</h2>
      <div className="proj-card">
        <div className="proj-box">
          <div className="proj-content">
            <h3>USERS MANAGEMENT-MVC MODEL</h3>
            <p>
              Spring Boot Application with Java for Users Management using MVC
              Architectural Pattern, the H2 database and JPA API for data
              management and persistence.
            </p>
            <Link to="https://github.com/sabrinibovo/spring-boot-with-java">
              Go to repository
            </Link>
            <div className="techicons">
              <FaJava size={30} /> <SiSpringboot size={30} /> <RiH2 size={30} />{" "}
            </div>
          </div>
          </div>
          </div>
          <div className="proj-card">
            <div className="proj-box">
              <div className="proj-content">
                <h3>BANK APPLICATION</h3>
                <p>Simulation of a bank system in JAVA</p>
                <Link to="https://github.com/sabrinibovo/bank-project-java">
                  Go to repository
                </Link>
                <div className="techicons">
                  <FaJava size={30} />{" "}
                </div>
              </div>
              </div>
              </div>
              <div className="proj-card">
                <div className="proj-box">
                  <div className="proj-content">
                    <h3>PORTIFOLIO'S WEBSITE</h3>
                    <p>
                      A site that i made with NODE.JS Framework for using as my
                      personal portifolio
                    </p>
                    <Link to="/">Go Check</Link>
                    <div className="techicons">
                      <FaHtml5 size={30} /> <FaCss3Alt size={30} />{" "}
                      <SiJavascript size={28} /> <FaNode size={30} />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
  );
};

export default ProjectsCards;
