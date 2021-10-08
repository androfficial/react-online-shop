import React from "react";

const SliderNavigation = ({ navigationPrevRef, navigationNextRef }) => {
  return (
    <div className="swiper-arrows">
      <button
        ref={navigationPrevRef}
        className="swiper-arrow swiper-arrow__prev"
        type="button"
      >
        <svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0.999999L6 6L1 11"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        ref={navigationNextRef}
        className="swiper-arrow swiper-arrow__next"
        type="button"
      >
        <svg viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 0.999999L6 6L1 11"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderNavigation;