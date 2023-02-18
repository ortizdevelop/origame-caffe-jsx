// Import libraries
import React, { Component } from "react";
import { motion } from "framer-motion";

// Import styles (CSS)
import "../styles/css/Menu.css";

// Import images
import coffePic from "../img/coffe.png";
import sandwichPic from "../img/sandwich.png";
import cakePic from "../img/cake.png";
import cheesePic from "../img/cheese.png";

const titleAnim = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.2,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const imgAnim = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (time) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: time * 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const textAnim = {
  hidden: {
    y: -30,
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
class Menu extends Component {
  render() {
    return (
      <motion.section
        viewport={{ amount: 0.2 }}
        initial="hidden"
        whileInView="visible"
        className="menu"
      >
        <motion.p custom={1} variants={titleAnim} className="menu__title">
          Меню
        </motion.p>
        <ul className="menu__column">
          <li className="menu__list">
            <motion.img
              custom={1}
              variants={imgAnim}
              src={coffePic}
              alt=""
              className="menu__img"
            />
            <motion.p
              whileHover={{
                translateY: 20,
              }}
              custom={3}
              variants={textAnim}
              className="menu__name"
            >
              Кофе
            </motion.p>
          </li>
          <li className="menu__list">
            <motion.img
              custom={2}
              variants={imgAnim}
              src={sandwichPic}
              alt=""
              className="menu__img"
            />
            <motion.p
              whileHover={{
                translateY: 20,
              }}
              custom={4}
              variants={textAnim}
              className="menu__name"
            >
              Сэндвичи
            </motion.p>
          </li>
          <li className="menu__list">
            <motion.img
              custom={3}
              variants={imgAnim}
              src={cakePic}
              alt=""
              className="menu__img"
            />
            <motion.p
              whileHover={{
                translateY: 20,
              }}
              custom={5}
              variants={textAnim}
              className="menu__name"
            >
              Чизкейки
            </motion.p>
          </li>
          <li className="menu__list">
            <motion.img
              custom={4}
              variants={imgAnim}
              src={cheesePic}
              alt=""
              className="menu__img"
            />
            <motion.p
              whileHover={{
                translateY: 20,
              }}
              custom={6}
              variants={textAnim}
              className="menu__name"
            >
              Сырники
            </motion.p>
          </li>
        </ul>
      </motion.section>
    );
  }
}

export default Menu;
