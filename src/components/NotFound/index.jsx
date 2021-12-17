import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ history }) => (
  <div className='error-404'>
    <div className='error-404__picture'>
      <svg viewBox='0 0 453 155'>
        <defs>
          <path
            id='SVGID_3_'
            d='M393.522,35.018l-35.109,56.361h35.109V35.018z M433.483,126.256v28.181h-39.961v-28.181H319.84v-30.95
              l58.438-94.935h55.205v91.008h18.71v34.877H433.483z M73.823,35.018l-35.11,56.361h35.11V35.018z M113.783,126.256v28.181h-39.96
              v-28.181H0.138v-30.95l58.44-94.935h55.205v91.008h18.708v34.877H113.783z'
          />
        </defs>
        <use xlinkHref='#SVGID_3_' overflow='visible' fill='#EF6357' />
        <circle fill='#EF6357' cx='228' cy='77' r='77' />
        <path
          fill='#FFFFFF'
          d='M172.963,110.847l3.93,4.242c0.394,0.425,1.033,0.425,1.426,0c0.394-0.425,0.394-1.113,0-1.54l-1.281-1.569
            c4.261-3.998,8.78-7.373,13.663-10.257c0.529,2.129,1.626,4.381,3.404,5.521c3.737,2.397,8.769,0.671,10.991-3.363
            c0,0,2.427-5.686,3.714-7.741c1.286-2.054,3.721-3.05,4.665-3.245c4.822-0.996,9.755-1.509,14.737-1.509
            c18.884,0,37.048,7.34,51.268,20.682l-1.375,1.482c-0.395,0.425-0.395,1.115,0.001,1.54c0.393,0.425,1.031,0.425,1.425,0
            l3.93-4.242c0.395-0.426,0.395-1.115,0-1.539c-0.196-0.213-0.454-0.318-0.712-0.318s-0.516,0.105-0.714,0.318l-1.123,1.213
            c-14.603-13.751-33.281-21.312-52.699-21.312c-19.418,0-38.022,7.483-52.625,21.233l-1.196-1.135
            c-0.198-0.213-0.456-0.318-0.714-0.318s-0.517,0.105-0.713,0.318C172.569,109.731,172.569,110.421,172.963,110.847'
        />
      </svg>
    </div>
    <h3 className='error-404__title'>Страница не найдена</h3>
    <div className='error-404__button-wrapper'>
      <button
        onClick={() => history.goBack()}
        className='error-404__button green-button'
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

NotFound.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default NotFound;
