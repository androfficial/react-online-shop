import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, EffectFade, Autoplay } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import Slide from './Slide';
import SliderNavigation from './SliderNavigation';

SwiperCore.use([Navigation, EffectFade, Autoplay]);

const HomeSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={1}
        speed={600}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        effect='fade'
        fadeEffect={{
          crossFade: true,
        }}
        autoHeight
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Slide title='Superstar' imageUrl='images/home-slider/01.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide title='Limited' imageUrl='images/home-slider/02.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <Slide title='Collection' imageUrl='images/home-slider/03.jpg' />
        </SwiperSlide>
      </Swiper>
      <SliderNavigation
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />
    </>
  );
};

export default HomeSlider;
