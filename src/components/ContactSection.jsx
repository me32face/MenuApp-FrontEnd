import React from "react";
import "../assets/styles/ContactSection.css";
import logo from "../assets/images/logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <footer className="contact-section">
      <div className="contact-box-container">
        {/* Connect Box */}
        <div className="contact-box">
          <h4 className="contact-heading">CONNECT WITH US</h4>
          <div className="info-row">
            <FaPhoneAlt className="icon" />
            <span>+91 9567843340</span>
          </div>
          <div className="info-row">
            <FaEnvelope className="icon" />
            <span>info@deepnetsoft.com</span>
          </div>
        </div>

        {/* Center Box with Logo and Socials */}
        <div className="contact-box logo-box">
          <img src={logo} alt="Logo" className="footer-logo" />
          <h3 className="footer-brand">
            <span className="deep">DEEP </span>
            <span className="net">NET </span>
            <span className="soft">SOFT</span>
          </h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaPaperPlane /></a>
          </div>
        </div>

        {/* Location Box */}
        <div className="contact-box">
          <h4 className="contact-heading">FIND US</h4>
          <div className="info-row">
            <FaMapMarkerAlt className="icon" />
            <span>
              First floor, Geo infopark,<br />
              Infopark EXPY, Kakkanad
            </span>
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      {/* <div className="footer-bottom">
        <p>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a>
        </div>
      </div> */}
    </footer>
  );
};

export default ContactSection;
