import "./HeroVideoStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import IntroVideo from "../assets/bgvideo.mp4";
import IntroMobileVideo from "../assets/mobile-video.mp4";

const HeroVideo = () => {
  setTimeout(() => {
    const button = document.querySelector(".button");
    button.style.display = "block";
  }, 3600);

  return (
    <div className="hero">
      <div className="mask">
        <video className="intro-video" src={IntroVideo} autoPlay muted />
        <video className="intro-mobile-video" src={IntroMobileVideo} autoPlay muted />

      </div>

      <div className="button-container">
        <Link to="/whoami" className="button">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default HeroVideo;
