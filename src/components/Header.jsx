// Import libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// Import Components

// Import images (png, jpg, SVG)
import bg from "../img/bg.png";
import logo from "../img/logo.svg";
import coffe from "../img/bx_coffee-togo.svg";
import sandwich from "../img/fluent-emoji-high-contrast_sandwich.svg";
import cake from "../img/icon-park_cake-two.svg";
import logo2 from "../img/logo2.png";
import arrow from "../img/dashicons_arrow-right-alt2.svg";

function Header() {
  const [nav, setNav] = useState(false);

  const contentAnim = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const pVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const aBounce = {
    hidden: {
      y: "2.5vh",
      opacity: 0,
    },
    visible: {
      y: "0vh",
      opacity: 1,
    },
  };

  const spanAnim1 = {
    hidden: {
      x: 10,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const spanAnim2 = {
    hidden: {
      x: 10,
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const pAnim = {
    hidden: {
      y: "3vh",
      opacity: 0,
    },

    visible: {
      y: "0vh",
      opacity: 1,
    },
  };

  const listAnim = {
    hidden: {
      x: "-10vh",
      opacity: 0,
    },

    visible: {
      x: "0vh",
      opacity: 1,
    },
  };

  const listAnim1 = {
    hidden: {
      x: "-2vh",
      opacity: 0,
    },

    visible: {
      x: "0vh",
      opacity: 1,
    },
  };

  const logoAnim = {
    hidden: {
      y: -20,
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

  const burgerAnim = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: (time) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: time * 0.4,
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.header initial="hidden" whileInView="visible" className="header">
      <img src={bg} alt="" className="header__bg" />
      <motion.nav variants={contentAnim} className="navbar">
        <ul className="navbar__column">
          <li className="navbar__list navbar__list-img">
            <motion.img
              src={logo}
              alt=""
              initial={"hidden"}
              animate={"visible"}
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
                stiffness: 500,
                damping: 100,
              }}
              variants={pVariants}
            />
          </li>
          <li className="navbar__list">
            <motion.a
              href="#"
              className="navbar__list-link"
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.65,
                delay: 1.2,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={aBounce}
            >
              О нас
            </motion.a>
          </li>
          <li className="navbar__list">
            <motion.a
              href="#"
              className="navbar__list-link"
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.65,
                delay: 1.25,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={aBounce}
            >
              Меню
            </motion.a>
          </li>
          <li className="navbar__list">
            <motion.a
              href="#"
              className="navbar__list-link"
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.65,
                delay: 1.3,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={aBounce}
            >
              Наш мерч
            </motion.a>
          </li>
          <li className="navbar__list">
            <motion.a
              href="#"
              className="navbar__list-link"
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.65,
                delay: 1.35,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={aBounce}
            >
              Адрес
            </motion.a>
          </li>
          <li
            className={
              nav
                ? "navbar__list navbar__list-menu-active"
                : "navbar__list navbar__list-menu"
            }
            onClick={() => setNav(!nav)}
          >
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{
                delay: 1.3,
                duration: 1,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={spanAnim1}
            >
              <motion.span className="navbar__list-menu-line menu-line1"></motion.span>
            </motion.p>
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{
                delay: 1.9,
                duration: 1,
              }}
              variants={spanAnim2}
            >
              <motion.span className="navbar__list-menu-line menu-line2"></motion.span>
            </motion.p>
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{
                delay: 1.3,
                duration: 1,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={spanAnim1}
            >
              <motion.span className="navbar__list-menu-line menu-line3"></motion.span>
            </motion.p>
          </li>
        </ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className={nav ? "burger-menu-active" : "burger-menu"}
        >
          <ul className="burger-menu__column">
            <li className="burger-menu__list">
              <motion.img
                custom={1}
                variants={logoAnim}
                src={logo2}
                alt=""
                className="burger-menu__img"
              />
            </li>
            <motion.li
              custom={2}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">Карта напитков</p>
            </motion.li>
            <motion.li
              custom={3}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">Зерновой кофе</p>
            </motion.li>
            <motion.li
              custom={4}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">О кофейне</p>
            </motion.li>
            <motion.li
              custom={5}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">Бариста</p>
            </motion.li>
            <motion.li
              custom={6}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">График работы</p>
            </motion.li>
            <motion.li
              custom={7}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">Где находимся</p>
            </motion.li>
            <motion.li
              custom={8}
              variants={burgerAnim}
              className="burger-menu__list list__text"
            >
              <p className="burger-menu__text">Связь с нами</p>
            </motion.li>
            <motion.li
              custom={9}
              variants={burgerAnim}
              className="burger-menu__list"
            >
              <motion.img
                custom={1}
                variants={logoAnim}
                src={arrow}
                alt=""
                className="burger-menu__arrow"
              />
            </motion.li>
          </ul>
        </motion.div>
      </motion.nav>
      <section className="header__content">
        <motion.p
          initial={"hidden"}
          animate={"visible"}
          transition={{
            duration: 0.6,
            delay: 1.5,
            ease: "easeIn",
            stiffness: 500,
            damping: 100,
            type: "spring",
            bounce: 1,
          }}
          variants={pAnim}
          className="header__slogan"
        >
          Начни свой день с ароматного кофе и вкуснейшего десерта
        </motion.p>
        <motion.p
          initial={"hidden"}
          animate={"visible"}
          transition={{
            duration: 0.6,
            delay: 1.65,
            ease: "easeIn",
            stiffness: 500,
            damping: 150,
            type: "spring",
            bounce: 1,
          }}
          variants={pAnim}
          className="header__time"
        >
          С 09:00 до 12:00 при заказе кофе, в подарок получите вкуснейший
          десерт!
        </motion.p>
        <motion.button
          initial={"hidden"}
          animate={"visible"}
          transition={{
            duration: 0.75,
            delay: 1.75,
            ease: "easeInOut",
            bounce: 1,
          }}
          variants={pAnim}
          className="header__stocks"
        >
          <a href="#" className="header__link">
            Подробнее об акции
          </a>
        </motion.button>
        <ul className="header__column">
          <li className="header__list">
            <motion.img
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 1.75,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={listAnim}
              src={coffe}
              alt=""
            />
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 2.6,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={listAnim1}
            >
              Лучшие сорта кофе
            </motion.p>
          </li>
          <li className="header__list">
            <motion.img
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 1.85,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={listAnim}
              src={sandwich}
              alt=""
            />
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 3.0,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={listAnim1}
            >
              Всегда свежие сэндвичи
            </motion.p>
          </li>
          <li className="header__list">
            <motion.img
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 1.95,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={listAnim}
              src={cake}
              alt=""
            />
            <motion.p
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 3.4,
                ease: "easeInOut",
                bounce: 1,
              }}
              variants={listAnim1}
            >
              Самые вкусные десерты
            </motion.p>
          </li>
        </ul>
      </section>
    </motion.header>
  );
}

export default Header;
