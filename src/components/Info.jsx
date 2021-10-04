import React from 'react';

import ArrowLeftSvg from '../assets/svg/overlay/ArrowLeftSvg';

const Info = ({ imageUrl, title, text, handleCloseOverlay }) => {
  return (
    <div className="overlay__phantom-block phantom-block">
      <div className="phantom-block__picture phantom-block__picture--info">
        <img src={imageUrl} alt="Декор" />
      </div>
      <div className="phantom-block__info">
        <h5 className="phantom-block__title">{title}</h5>
        <p className="phantom-block__text">
          {text}
        </p>
      </div>
      <div className="phantom-block__go-back">
        <button onClick={handleCloseOverlay} className="phantom-block__btn green-button">
          <ArrowLeftSvg />
          Вернуться назад
        </button>
      </div>
    </div>
  );
};

export default Info;