// Import libraries
import React from "react";
import { motion } from "framer-motion";

// Import styles (CSS)
import "../styles/css/About.css";

// Import images (png, jpg, SVG)
import image from "../img/IMG_20210704_134009 1.png";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const titleAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.4,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const imgAnim = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (time) => ({
    scale: 1,
    opacity: 1,

    transition: {
      delay: time * 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

class About extends React.Component {
  render() {
    return (
      <motion.section
        initial={"hidden"}
        whileInView={"visible"}
        className="about"
      >
        <div className="about__body">
          <motion.h1 variants={titleAnimation} className="about__title">
            О нас
          </motion.h1>
          <article className="about__content">
            <motion.p
              custom={1}
              variants={textAnimation}
              className="about__text"
            >
              В нашем кафе <span>ORIGAMI</span> быстрое обслуживание и приятная
              атмосфера. Всегда хорошая музыка которая тихо играет на фоне. Если
              вы спешите, то еду и кофе вам удобно упакуют, так что вы сможете
              удобно взять с собой.
              <motion.p custom={2} variants={textAnimation}>
                Мы используем лучшие кофейные зёрна, именно по этому наше кофе
                очень ароматное и насыщенное.
              </motion.p>
              <motion.p custom={3} variants={textAnimation}>
                Меню у нас не дорогое, но качественное. Все блюда готовятся
                только с использованием свежих продуктов, так что вы вс
                получаете, вкусную и свежую еду.
              </motion.p>
            </motion.p>
            <motion.img
              custom={3}
              variants={imgAnim}
              src={image}
              alt=""
              className="about__img"
            />
          </article>
        </div>
      </motion.section>
    );
  }
}

export default About;
