import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
/* import "swiper/css/navigation"; */
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import {
  Slide,
  SliderContainer,
  StyledSliderLink,
} from "./styledSlider";

import LongArrowRight from "../../assets/icons/LongArrowRight";

export const slidesData = [{ title: "Slide 1" }, { title: "Slide 2" }, { title: "Slide 3" }, { title: "Slide 4" }, { title: "Slide 5" }];

const Slider = ({ content, nameLink }: { content?: React.ReactNode, nameLink?: string }) => {
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{
          type: 'fraction',
        }}
        onSlideChange={() => { }}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <SwiperSlide><Slide>{content}</Slide></SwiperSlide>
        <SwiperSlide><Slide>{content}</Slide></SwiperSlide>
        <SwiperSlide><Slide>{content}</Slide></SwiperSlide>
        <SwiperSlide><Slide>{content}</Slide></SwiperSlide>
        <SwiperSlide><Slide>{content}</Slide></SwiperSlide>
      </Swiper>
      {nameLink && <StyledSliderLink to="#">{nameLink}<LongArrowRight /></StyledSliderLink>}
    </SliderContainer>
  );
};

export default Slider;
