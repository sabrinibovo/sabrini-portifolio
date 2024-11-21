import "./FooterStyle.css";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        <div className="location">
          <FaMapMarkerAlt
            size={17}
            style={{ color: "#fff", marginRight: "2rem" }}
          />
          <div>
            <p>São Paulo - Brasil</p>
          </div>
        </div>
        <div className="cellphone">
          <p>
            <FaPhoneAlt
              size={17}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            +55 11 974162927
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
