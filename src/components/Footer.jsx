// Import libraries
import React from "react";
import { motion } from "framer-motion";

// Import CSS
import "../styles/css/Footer.css";

// Import images (png, jpg, SVG)
import footerLogo from "../img/Group 4.png";
import footerAuthors from "../img/ORTIZ & Uliss.png";

const topAnim = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const midAnim = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const buttonAnim = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 0.35,
      ease: "easeInOut",
    },
  }),
};

const linkAnim = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: time * 0.4,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

class Footer extends React.Component {
  render() {
    return (
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="footer"
      >
        <ul className="footer__column">
          <motion.li custom={1} variants={topAnim} className="footer__list">
            <img src={footerLogo} alt="" className="footer__img" />
          </motion.li>
          <motion.li custom={2} variants={topAnim} className="footer__list">
            <p className="footer__copyright">© ORIGAMI. 2023</p>
          </motion.li>
          <motion.li custom={3} variants={topAnim} className="footer__list">
            <p className="footer__number">+7 902 274 16 17</p>
          </motion.li>
        </ul>
        <motion.div
          custom={4}
          variants={midAnim}
          className="footer__authorcopy"
        >
          <img src={footerAuthors} alt="" className="footer__authors" />
        </motion.div>
        <div className="footer__github">
          <motion.button
            custom={5}
            variants={buttonAnim}
            className="footer__button"
          >
            <motion.a
              custom={6.95}
              variants={linkAnim}
              target={"_blank"}
              href="#"
              className="footer__link"
            >
              github.com/ortizdevelop
            </motion.a>
          </motion.button>
        </div>
      </motion.footer>
    );
  }
}

export default Footer;
