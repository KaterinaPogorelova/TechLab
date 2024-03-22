import React from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { coursesArrayMocks } from '../../PopularCoursesLayout/PopularCoursesContainer/mocks';
import {
  StyledPopularCousreContainer,
  StyledPopularHorizontalContainer
} from '../../PopularCoursesLayout/PopularCoursesContainer/StyledPopularCourses';
import { dataSoonCourses } from "../SoonStartContainer/dataSoonCourses";
import PopularCard from '../../PopularCoursesLayout/PopularCoursesContainer/PopularCard/PopularCard';
import { StyledSoonContainer } from "../SoonStartContainer/styledSoonContainer";
import SoonCourseCard, { ISoonCourse } from "../SoonStartContainer/SoonCourseCard/SoonCourseCard";
import 'swiper/css';
import '../../PopularCoursesLayout/PopularMinSlider/styleSliderMin.css'
import './styleSoonSliderMobile.css'

const SoonSliderMobile = () => {
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={'auto'}
      // spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, A11y]}
      className='popularMobile soonMobile'
      style={{}}
    >
      {dataSoonCourses.map((course: ISoonCourse, i: number) => (
        <SwiperSlide key={i} className='swiperSoon'>
          <StyledSoonContainer>
            <SoonCourseCard
              name={course.name}
              duration={course.duration}
              startDate={course.startDate}
              price={course.price}
              type={course.type}
            />
          </StyledSoonContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SoonSliderMobile
