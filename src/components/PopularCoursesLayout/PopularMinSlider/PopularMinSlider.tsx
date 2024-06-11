import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import 'swiper/css/pagination';
// import '../Slider/slider.css';
import "../PopularMinSlider/styleSliderMin.css";
import { coursesArrayMocks } from "../PopularCoursesContainer/mocks";
import PopularCard from "../PopularCoursesContainer/PopularCard/PopularCard";
import {
  StyledPopularCousreContainer,
  StyledPopularHorizontalContainer,
} from "../PopularCoursesContainer/StyledPopularCourses";
import { SliderContainer, StyledSliderLink } from "../../Slider/styledSlider";
import LongArrowRight from "../../../assets/icons/LongArrowRight";

const PopularMinSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={2}
        spaceBetween={16}
        loop={true}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        modules={[Pagination, Navigation, A11y]}
        className="popularMin"
        style={{}}
      >
        {coursesArrayMocks.map((course, index) => (
          <StyledPopularHorizontalContainer key={index}>
            <SwiperSlide key={index} className="swiper-popular">
              <StyledPopularCousreContainer
                key={index}
                $design={course.type === "Design" ? true : false}
                $machine={course.type === "Data Science" ? true : false}
              >
                <PopularCard
                  header={course.header}
                  countLessons={course.countLessons}
                  type={course.type}
                  description={course.description}
                  imageSrc={course.imageSrc}
                  // path={course.path}
                />
              </StyledPopularCousreContainer>
            </SwiperSlide>
          </StyledPopularHorizontalContainer>
        ))}
      </Swiper>
    </>
  );
};

export default PopularMinSlider;
