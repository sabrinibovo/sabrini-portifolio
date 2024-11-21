import React from "react";
import "./WhoAmISectionStyles.css";
import { US } from "country-flag-icons/react/3x2";
import { BR } from "country-flag-icons/react/3x2";
import { KR } from "country-flag-icons/react/3x2";
import profilepic from "../assets/profile-pic.png";

const WhoAmISection = () => {
  return (
    <div className="whoami-container">
      <h2>About Me</h2>
      <div className="profile">
        <img src={profilepic} alt="me" />
        <div className="profile-para">
          <p>
            Sabrini Maria de Araujo Bovo <br />
            Software Engineering Student <br />
            21 years old <br />
          </p>
          <h3>LANGUAGES</h3>
          <div className="lang-flags">
            <div className="lang-item">
              <BR className="flag-icon" />
              <span className="lang-text">My Native Language</span>
            </div>
            <div className="lang-item">
              <US className="flag-icon" />
              <span className="lang-text">Intermediary</span>
            </div>
            <div className="lang-item">
              <KR className="flag-icon" />
              <span className="lang-text">Basic</span>
            </div>
          </div>
        </div>
      </div>
      <div className="whoami-box-container">
        <div className="whoami-box">
          
          <p>
            My name is Sabrini, I am a Software Engineering student with a lot of creativity and passion.
            I like to try new challenges and I am always looking for something new to learn by myself. 
            My journey with the programming world started in 2022, since then, I feel like a learned so 
            much, and, at the same time, I feel like a have so much more to discover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAmISection;
