import React from "react";
import "./FooterStyles.scss";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h1>
            Cryp<span className="primary">To</span>
          </h1>
        </div>

        <div className="col">
          <h5>Support</h5>
          <span className="bar">
            <a href="/">Contact up</a>
            <a href="/">Chat</a>
            <a href="/">Help Center</a>
            <a href="/">FAQ</a>
          </span>
        </div>

        <div className="col">
          <h5>Developers</h5>
          <span className="bar">
            <a href="/">Cloud</a>
            <a href="/">Commerce</a>
            <a href="/">Pro</a>
            <a href="/">API</a>
          </span>
        </div>

        <div className="col">
          <h5>Company</h5>
          <span className="bar">
            <a href="/">About</a>
            <a href="/">Information</a>
            <a href="/">Legal</a>
            <a href="/">Privacy</a>
          </span>
        </div>

        <div className="col">
          <h5>Social</h5>
          <span className="bar">
            <a href="/">
              <FaFacebook className="icon" />
            </a>
            <a href="/">
              <FaTwitter className="icon" />
            </a>
            <a href="/">
              <FaLinkedin className="icon" />
            </a>
            <a href="/">
              <FaGithub className="icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
