// Import libraries
import React from "react";
import { motion } from "framer-motion";

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
    scale: [1.0, 2.5, 1.3, 1.0],
    transition: {
      delay: time * 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};
class Merch extends React.Component {
  render() {
    return (
      <motion.section initial="hidden" whileInView="visible" className="merch">
        <motion.p custom={1} variants={titleAnim} className="merch__title">
          Мерч
        </motion.p>
        <motion.p custom={2} variants={titleAnim} className="merch__dev">
          В разработке
        </motion.p>
        <motion.p custom={3} variants={imgAnim} className="merch__sad">
          :(
        </motion.p>
      </motion.section>
    );
  }
}

export default Merch;
