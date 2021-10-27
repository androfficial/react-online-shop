import React from 'react';

const Slide = ({ title, span, imageUrl }) => {
  return (
    <div className="main-slider__slide slide">
      <div className="slide__picture">
        <img src={imageUrl} alt="Adidas Sneakers" />
      </div>
      <div className="slide__body">
        <div className="slide__logo">
          <img src="images/home-slider/slider-logo.svg" alt="Слайдер Лого" />
        </div>
        <div className="slide__content">
          <h2 className="slide__title">
            {title}
          </h2>
          <a href="/" className="slide__link">
            Купить
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
