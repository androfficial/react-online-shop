import React from 'react';
import { Link } from 'react-router-dom';

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
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.7144 7L1.00007 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 13L1 7L7 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Вернуться назад
        </Link>
      </div>
    </div>
  );
};

export default Info;