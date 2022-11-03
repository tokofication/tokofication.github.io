import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="p-2 fixed-bottom border-top">
      <div className="container">
        <div className="row">
          <div className="text-start col-6">
            <span className="text-secondary">&copy; 2022 taufiqidr</span>
          </div>
          <div className="text-end text-light col-6">
            <a
              className="text-secondary m-3"
              href="https://twitter.com/taufiqidr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="text-secondary m-3"
              href="https://www.instagram.com/taufiqidr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              className="text-secondary m-3"
              href="https://www.facebook.com/taufiqidr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
