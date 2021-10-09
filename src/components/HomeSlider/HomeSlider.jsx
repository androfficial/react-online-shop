import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";

import Slide from "./Slide";
import SliderNavigation from "./SliderNavigation";

SwiperCore.use([ Navigation, EffectFade, Autoplay ]);

export default () => {
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
        effect={'fade'}
        fadeEffect={{
          crossFade: true,
        }}
        autoHeight={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Slide title="Daya Ais" span="Forever!" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="Mlk Way, Der Loi and Other" span="Lovely!" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide title="Dwn Wood" span="Ripply!" />
        </SwiperSlide>
      </Swiper>
      <SliderNavigation
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />
    </>
  );
};