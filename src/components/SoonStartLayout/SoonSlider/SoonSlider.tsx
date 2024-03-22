import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
/* import "swiper/css/navigation"; */
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../Slider/slider.css";
import {
  Slide,
  SliderContainer,
  StyledSliderLink,
} from "../../Slider/styledSlider";
import { dataSoonCourses } from "../SoonStartContainer/dataSoonCourses";
import SoonCourseCard, { ISoonCourse } from "../SoonStartContainer/SoonCourseCard/SoonCourseCard";
import {
  StyledSoonContainer,
  StyledSoonLowerLine,
  StyledSoonUpperLine
} from "../SoonStartContainer/styledSoonContainer";

const SoonSlider = ({content, nameLink}: { content?: any[], nameLink?: string }) => {
  const countRemainder: number = dataSoonCourses.length % 6;

  const dataSoonArrayOfSix: ISoonCourse[][] = [];

  //Разбиваем массив карточек на подмассивы из 6-ти карточек, и формируем новый массив из этих подмассивов
  //для последего подмассива если не хватает карточек до 6-ти, дополняем карточками, начиная с первой.
  for (let i: number = 0; i < dataSoonCourses.length; i = i + 6) {
    const arrCardFour: ISoonCourse[] = []
    for (let j: number = 0; j < 6; j++) {
      if (dataSoonCourses[i + j] !== undefined) {
        arrCardFour.push(dataSoonCourses[i + j]);
      } else {
        arrCardFour.push(dataSoonCourses[j - countRemainder]);
      }
    }
    dataSoonArrayOfSix.push(arrCardFour);
  }

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
        onSlideChange={() => {
        }}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {
          dataSoonArrayOfSix.map((courses: ISoonCourse[], index: number) =>
            <SwiperSlide key={index}>
              <Slide>
                <StyledSoonContainer>
                  <StyledSoonUpperLine>
                    {
                      courses.map((course: ISoonCourse, ind: number) => {
                          if (ind < 3) {
                            return (
                              <SoonCourseCard
                                key={ind}
                                name={course.name}
                                duration={course.duration}
                                startDate={course.startDate}
                                price={course.price}
                                type={course.type}
                              />
                            )
                          }
                        }
                      )
                    }
                  </StyledSoonUpperLine>
                  <StyledSoonLowerLine>
                    {
                      courses.map((course: ISoonCourse, ind: number) => {
                          if (ind >= 3) {
                            return (
                              <SoonCourseCard
                                key={ind}
                                name={course.name}
                                duration={course.duration}
                                startDate={course.startDate}
                                price={course.price}
                                type={course.type}
                              />
                            )
                          }
                        }
                      )
                    }
                  </StyledSoonLowerLine>
                </StyledSoonContainer>
              </Slide>
            </SwiperSlide>
          )
        }
      </Swiper>
    </SliderContainer>
  )
}

export default SoonSlider;
