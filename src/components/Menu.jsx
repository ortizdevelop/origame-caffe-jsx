// Import libraries
import React, { Component } from "react";

// Import styles (CSS)
import "../styles/Menu.css";

// Import images
import coffePic from "../img/coffe.png";
import sandwichPic from "../img/sandwich.png";
import cakePic from "../img/cake.png";
import cheesePic from "../img/cheese.png";

class Menu extends Component {
  render() {
    return (
      <section className="menu">
        <p className="menu__title">Меню</p>
        <ul className="menu__column">
          <li className="menu__list">
            <img src={coffePic} alt="" className="menu__img" />
            <p className="menu__name">Кофе</p>
          </li>
          <li className="menu__list">
            <img src={sandwichPic} alt="" className="menu__img" />
            <p className="menu__name">Сэндвичи</p>
          </li>
          <li className="menu__list">
            <img src={cakePic} alt="" className="menu__img" />
            <p className="menu__name">Чизкейки</p>
          </li>
          <li className="menu__list">
            <img src={cheesePic} alt="" className="menu__img" />
            <p className="menu__name">Сырники</p>
          </li>
        </ul>
      </section>
    );
  }
}

export default Menu;
