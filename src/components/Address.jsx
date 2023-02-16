// Import libraries
import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";

class Address extends React.Component {
  render() {
    return (
      <section className="address">
        <p className="address__title">Адрес</p>
        <article className="address__content">
          <YMaps>
            <div>
              <Map
                className="address__map"
                defaultState={{ center: [56.913913, 59.941677], zoom: 18 }}
              />
            </div>
          </YMaps>
          <ul className="address__columns">
            <li className="address__list">
              <p>г. Первоуральск, улица Ленина 25А, 1 подъезд</p>
            </li>
            <li className="address__list">
              <p>Время работы:</p>
            </li>
            <li className="address__list">
              <p>пн-пт - 08:00 до 21:00 сб-вс - 10:00 до 21:00</p>
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default Address;
