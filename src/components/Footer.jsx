import React from "react";
import "../assets/styles/Footer.css";

const BaseFooter = () => {
  return (
    <div className="base-footer">
      <p>© 2024 Br & Grill. Developed by DeepNetSoft Solutions.</p>
      <div className="footer-links">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default BaseFooter;
