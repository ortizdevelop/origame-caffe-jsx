// Import libraries
import React from "react";
import { motion } from "framer-motion";
import { YMaps, Map } from "@pbe/react-yandex-maps";

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

const textAnim = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (time) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: time * 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const mapAnim = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: time * 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

class Address extends React.Component {
  render() {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        className="address"
      >
        <motion.p custom={2} variants={titleAnim} className="address__title">
          Адрес
        </motion.p>
        <article className="address__content">
          <YMaps>
            <motion.div custom={4} variants={mapAnim}>
              <Map
                className="address__map"
                defaultState={{ center: [56.913913, 59.941677], zoom: 18 }}
              />
            </motion.div>
          </YMaps>
          <ul className="address__columns">
            <li className="address__list">
              <motion.p custom={2.5} variants={textAnim}>
                г. Первоуральск, улица Ленина 25А, 1 подъезд
              </motion.p>
            </li>
            <li className="address__list">
              <motion.p custom={3} variants={textAnim}>
                Время работы:
              </motion.p>
            </li>
            <li className="address__list">
              <motion.p custom={3.5} variants={textAnim}>
                пн-пт - 08:00 до 21:00 сб-вс - 10:00 до 21:00
              </motion.p>
            </li>
          </ul>
        </article>
      </motion.section>
    );
  }
}

export default Address;
