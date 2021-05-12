import React from "react";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <h4>Questions? Contact Us.</h4>
      <ul className="link-items">
        <li className="link-item">
          <a href="/">FAQ</a>
        </li>
        <li className="link-item">
          <a href="/">Investor Relations</a>
        </li>
        <li className="link-item">
          <a href="/">Privacy</a>
        </li>
        <li className="link-item">
          <a href="/">Speed Test</a>
        </li>
        <li className="link-item">
          <a href="/">Help Center</a>
        </li>
        <li className="link-item">
          <a href="/">Jobs</a>
        </li>
        <li className="link-item">
          <a href="/">Cookie Preferences</a>
        </li>
        <li className="link-item">
          <a href="/">Legal Notices</a>
        </li>
        <li className="link-item">
          <a href="/">Account</a>
        </li>
        <li className="link-item">
          <a href="/">Ways to Watch</a>
        </li>
        <li className="link-item">
          <a href="/">Corporate Information</a>
        </li>
        <li className="link-item">
          <a href="/">Netflix Originals</a>
        </li>
        <li className="link-item">
          <a href="/">Terms of Use</a>
        </li>
        <li className="link-item">
          <a href="/">Contact Us</a>
        </li>
      </ul>

      <small className="designer">
        @designed by{" "}
        <a
          href="http://github.com/mr-chidex"
          target="_blank"
          rel="noopener noreferrer"
        >
          mr-chidex
        </a>
      </small>
    </footer>
  );
};

export default Footer;
