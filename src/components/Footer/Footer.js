import React from "react";
import "./Footer.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
            <Link to="/">XXXXX</Link>
          </div>
        </div>
        <div className="footer-link-items">
          <h2>Videos</h2>
          <Link to="/">XXXXX Video</Link>
          <Link to="/">XXXXX</Link>
          <Link to="/">XXXXX</Link>
          <Link to="/">XXXXX</Link>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Celesta
              <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">Celesta 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
