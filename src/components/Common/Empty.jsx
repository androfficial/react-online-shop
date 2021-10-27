import React from 'react';
import { Link } from 'react-router-dom';

import ArrowLeftSvg from '../../assets/svg/overlay/ArrowLeftSvg';

const Info = ({ imageUrl, title, text }) => {
  return (
    <div className="overlay__phantom-block phantom-block">
      <div className="phantom-block__picture">
        <img src={imageUrl} alt="Декор" />
      </div>
      <div className="phantom-block__info">
        <h5 className="phantom-block__title">{title}</h5>
        <p className="phantom-block__text">{text}</p>
      </div>
      <div className="phantom-block__go-back">
        <Link to="/" className="phantom-block__btn green-button">
          <ArrowLeftSvg />
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

export default Info;