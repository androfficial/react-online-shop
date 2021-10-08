import React from "react";

const Slide = ({ title, span }) => {
  return (
    <div className="main-slider__slide slide">
      <div className="slide__body">
        <div className="slide__logo">
          <img src="images/home-slider/slider-logo.png" alt="Слайдер Лого" />
        </div>
        <div className="slide__content">
          <h2 className="slide__title">
            {title}, <span>{span}</span>
          </h2>
          <a href="/" className="slide__link">
            Купить
          </a>
        </div>
      </div>
      <a href="/" className="slide__picture">
        <img src="images/home-slider/slide-1.png" alt="Слайд-1" />
      </a>
    </div>
  );
};

export default Slide;