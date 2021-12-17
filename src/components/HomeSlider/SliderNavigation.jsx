import React from 'react';
import PropTypes from 'prop-types';

const SliderNavigation = ({ navigationPrevRef, navigationNextRef }) => (
  <div className='swiper-arrows'>
    <button
      ref={navigationPrevRef}
      className='swiper-arrow swiper-arrow__prev'
      type='button'
    >
      <svg viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 0.999999L6 6L1 11'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
    <button
      ref={navigationNextRef}
      className='swiper-arrow swiper-arrow__next'
      type='button'
    >
      <svg viewBox='0 0 7 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 0.999999L6 6L1 11'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  </div>
);

SliderNavigation.propTypes = {
  navigationPrevRef: PropTypes.objectOf(PropTypes.object).isRequired,
  navigationNextRef: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SliderNavigation;
