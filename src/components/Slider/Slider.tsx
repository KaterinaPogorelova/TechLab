import React, { useEffect,  useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./slider.css";
import {
  Slide,
  SliderContainer,
} from "./styledSlider";

export const slidesData = [{title: "Slide 1"}, {title: "Slide 2"}, {title: "Slide 3"}, {title: "Slide 4"}];

const Slider = () => {
  useEffect(() => {
    const element = document.querySelector(".swiper-pagination-horizontal");
    if (element && element.textContent) {
      element.textContent = element.textContent.replace(/\s/g, '');
    }
  }, []);
  
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          type: 'fraction',
        }}
        onSlideChange={() => {}}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
          <Slide>{slide.title}</Slide>
        </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
