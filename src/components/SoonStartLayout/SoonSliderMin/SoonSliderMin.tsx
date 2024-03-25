import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import {
  StyledSoonContainer,
  StyledSoonLowerLine,
  StyledSoonUpperLine
} from "../SoonStartContainer/styledSoonContainer";
import SoonCourseCard, { ISoonCourse } from "../SoonStartContainer/SoonCourseCard/SoonCourseCard";
import { StyledFlex } from "../../../styledConstants";
import { dataSoonCoursesUpper, dataSoonCoursesLower, dataSoonCourses } from "../SoonStartContainer/dataSoonCourses";
import 'swiper/css';
import '../../PopularCoursesLayout/PopularMinSlider/styleSliderMin.css'

const SoonSliderMin = () => {
  const countRemainder: number = dataSoonCourses.length % 4;
  let dataSoonArrayOfFour: ISoonCourse[][] = [];

  //Разбиваем массив карточек на подмассивы из 4-х карточек, и формируем новый массив из этих подмассивов
  //для последего подмассива если не хватает карточек до 4-х, дополняем, начиная с первой.
  for (let i: number = 0; i < dataSoonCourses.length; i = i + 4) {
    const arrCardFour: ISoonCourse[] = []
    for (let j: number = 0; j < 4; j++) {
      if (dataSoonCourses[i + j] !== undefined) {
        arrCardFour.push(dataSoonCourses[i + j]);
      } else {
        arrCardFour.push(dataSoonCourses[j - countRemainder]);
      }
    }
    dataSoonArrayOfFour.push(arrCardFour);
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        modules={[Pagination, Navigation, A11y]}
        className='popularMin'
        style={{}}
      >
        {
          dataSoonArrayOfFour.map((courses: ISoonCourse[], index: number) =>
            <SwiperSlide key={index}>
              <StyledSoonContainer>
                {
                  courses.map((course: ISoonCourse, i: number) =>
                    <SoonCourseCard
                      key={i}
                      name={course.name}
                      duration={course.duration}
                      startDate={course.startDate}
                      price={course.price}
                      type={course.type}
                    />
                  )
                }
              </StyledSoonContainer>
            </SwiperSlide>
          )
        }
      </Swiper>
      {/*<SoonCourseContainerMin/>*/}
    </>
  )
}

export default SoonSliderMin;