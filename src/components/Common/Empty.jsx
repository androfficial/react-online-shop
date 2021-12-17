import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ imageUrl, title, text, history }) => (
  <div className='overlay__phantom-block phantom-block'>
    <div className='phantom-block__picture'>
      <img src={imageUrl} alt='Декор' />
    </div>
    <div className='phantom-block__info'>
      <h5 className='phantom-block__title'>{title}</h5>
      <p className='phantom-block__text'>{text}</p>
    </div>
    <div className='phantom-block__go-back'>
      <button
        onClick={() => history.goBack()}
        className='phantom-block__btn green-button'
        type='button'
      >
        <svg
          width='16'
          height='14'
          viewBox='0 0 16 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14.7144 7L1.00007 7'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M7 13L1 7L7 1'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        Вернуться назад
      </button>
    </div>
  </div>
);

Info.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

Info.defaultProps = {
  imageUrl: 'images/orders/sad.png',
  title: 'Упс',
  text: 'К сожалению здесь пусто',
};

export default Info;
