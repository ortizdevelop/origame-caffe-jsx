// Import libraries
import React from "react";

// Import styles (CSS)
import "../styles/About.css";

// Import images (png, jpg, SVG)
import image from "../img/IMG_20210704_134009 1.png";

class About extends React.Component {
  render() {
    return (
      <section className="about">
        <div className="about__body">
          <h1 className="about__title">О нас</h1>
          <article className="about__content">
            <p className="about__text">
              В нашем кафе <span>ORIGAMI</span> быстрое обслуживание и приятная
              атмосфера. Всегда хорошая музыка которая тихо играет на фоне. Если
              вы спешите, то еду и кофе вам удобно упакуют, так что вы сможете
              удобно взять с собой.
              <p>
                Мы используем лучшие кофейные зёрна, именно по этому наше кофе
                очень ароматное и насыщенное.
              </p>
              <p>
                Меню у нас не дорогое, но качественное. Все блюда готовятся
                только с использованием свежих продуктов, так что вы вс
                получаете, вкусную и свежую еду.
              </p>
            </p>
            <img src={image} alt="" className="about__img" />
          </article>
        </div>
      </section>
    );
  }
}

export default About;
