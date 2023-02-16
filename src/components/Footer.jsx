// Import libraries
import React from "react";

// Import CSS
import "../styles/Footer.css";

// Import images (png, jpg, SVG)
import footerLogo from "../img/Group 4.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__column">
          <li className="footer__list">
            <img src={footerLogo} alt="" className="footer__img" />
          </li>
          <li className="footer__list">
            <p className="footer__copyright">© ORIGAMI. 2022</p>
          </li>
          <li className="footer__list">
            <p className="footer__number">+7 902 274 16 17</p>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
