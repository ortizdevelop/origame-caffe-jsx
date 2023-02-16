// Import libraries
import React, { useState } from "react";

// Import Components

// Import images (png, jpg, SVG)
import bg from "../img/bg.png";
import logo from "../img/logo.svg";
import coffe from "../img/bx_coffee-togo.svg";
import sandwich from "../img/fluent-emoji-high-contrast_sandwich.svg";
import cake from "../img/icon-park_cake-two.svg";
import logo2 from "../img/logo2.png";
import arrow from "../img/dashicons_arrow-right-alt2.svg";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="header">
      <img src={bg} alt="" className="header__bg" />
      <nav className="navbar">
        <ul className="navbar__column">
          <li className="navbar__list navbar__list-img">
            <img src={logo} alt="" />
          </li>
          <li className="navbar__list">
            <a href="#" className="navbar__list-link">
              О нас
            </a>
          </li>
          <li className="navbar__list">
            <a href="#" className="navbar__list-link">
              Меню
            </a>
          </li>
          <li className="navbar__list">
            <a href="#" className="navbar__list-link">
              Наш мерч
            </a>
          </li>
          <li className="navbar__list">
            <a href="#" className="navbar__list-link">
              Адрес
            </a>
          </li>
          <li
            className={
              nav
                ? "navbar__list navbar__list-menu-active"
                : "navbar__list navbar__list-menu"
            }
            onClick={() => setNav(!nav)}
          >
            <p>
              <span className="navbar__list-menu-line menu-line1"></span>
            </p>
            <p>
              <span className="navbar__list-menu-line menu-line2"></span>
            </p>
            <p>
              <span className="navbar__list-menu-line menu-line3"></span>
            </p>
          </li>
        </ul>

        <div className={nav ? "burger-menu-active" : "burger-menu"}>
          <ul className="burger-menu__column">
            <li className="burger-menu__list">
              <img src={logo2} alt="" className="burger-menu__img" />
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">Карта напитков</p>
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">Зерновой кофе</p>
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">О кофейне</p>
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">Бариста</p>
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">График работы</p>
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">Где находимся</p>
            </li>
            <li className="burger-menu__list list__text">
              <p className="burger-menu__text">Связь с нами</p>
            </li>
            <li className="burger-menu__list">
              <img src={arrow} alt="" className="burger-menu__arrow" />
            </li>
          </ul>
        </div>
      </nav>
      <section className="header__content">
        <p className="header__slogan">
          Начни свой день с ароматного кофе и вкуснейшего десерта
        </p>
        <p className="header__time">
          С 09:00 до 12:00 при заказе кофе, в подарок получите вкуснейший
          десерт!
        </p>
        <button className="header__stocks">
          <a href="#" className="header__link">
            Подробнее об акции
          </a>
        </button>
        <ul className="header__column">
          <li className="header__list">
            <img src={coffe} alt="" />
            <p>Лучшие сорта кофе</p>
          </li>
          <li className="header__list">
            <img src={sandwich} alt="" />
            <p>Всегда свежие сэндвичи</p>
          </li>
          <li className="header__list">
            <img src={cake} alt="" />
            <p>Самые вкусные десерты</p>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
