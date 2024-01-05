import React from 'react'
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import './styleSliderMobile.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { coursesArrayMocks } from '../PopularCoursesContainer/mocks';
import { StyledPopularCousreContainer, StyledPopularHorizontalContainer } from '../PopularCoursesContainer/StyledPopularCourses';
import PopularCard from '../PopularCoursesContainer/PopularCard/PopularCard';

const PopularMobileSlider = () => {
  return (
    <Swiper
    centeredSlides={true}  
      slidesPerView={'auto'}    
      spaceBetween={16}        
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation, A11y]}
      className='popularMobile'
      style={{}}
    >
      {coursesArrayMocks.map((course, index) => (
        <StyledPopularHorizontalContainer key={index}>
          <SwiperSlide  key={index}>
            <StyledPopularCousreContainer  key={index} $design={course.type === 'Design' ? true : false} $machine={course.type === 'Data Science' ? true: false}>
              <PopularCard
                header={course.header}
                countLessons={course.countLessons}
                type={course.type}
                description={course.description}
                imageSrc={course.imageSrc}
              />
            </StyledPopularCousreContainer>
          </SwiperSlide>
        </StyledPopularHorizontalContainer>
      ))}
    </Swiper>
  );
}

export default PopularMobileSlider
