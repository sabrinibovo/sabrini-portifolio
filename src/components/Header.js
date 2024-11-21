import "./HeaderStyles.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Sabrini's Portifolio</h1>
      </Link>
      <ul className={click ? "header-menu active" : "header-menu"}>
        <div className="header-icons-socialmedia">
          <Link to="https://wa.me/5511974162927">
            <AiOutlineWhatsApp size={25} style={{ color: "#fff" }} />
          </Link>

          <Link to="https://www.linkedin.com/in/sabrinibovo/">
            <AiFillLinkedin size={25} style={{ color: "#fff" }} />
          </Link>

          <Link to="https://github.com/sabrinibovo">
            <AiFillGithub size={25} style={{ color: "#fff" }} />
          </Link>
        </div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/whoami">Who Am I</Link>
        </li>
        <li>
          <Link to="/technologies">Technologies</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="header-icons-socialmedia">
        <Link to="https://wa.me/5511974162927">
          <AiOutlineWhatsApp size={20} style={{ color: "#fff" }} />
        </Link>

        <Link to="https://www.linkedin.com/in/sabrinibovo/">
          <AiFillLinkedin size={20} style={{ color: "#fff" }} />
        </Link>

        <Link to="https://github.com/sabrinibovo">
          <AiFillGithub size={20} style={{ color: "#fff" }} />
        </Link>
      </div>

      <div className="header-hamburguer" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
