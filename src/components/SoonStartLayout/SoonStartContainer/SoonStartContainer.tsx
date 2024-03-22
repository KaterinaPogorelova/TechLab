import { StyledFlex } from '../../../styledConstants'
import SoonCourseCard, { ISoonCourse } from './SoonCourseCard/SoonCourseCard'
import { StyledSoonContainer, StyledSoonLowerLine, StyledSoonUpperLine } from './styledSoonContainer'
import { dataSoonCourses } from "./dataSoonCourses";

const SoonStartContainer = () => {
  const countRemainder: number = dataSoonCourses.length % 3;

  const dataSoonArrayOfThree: ISoonCourse[][] = [];

  //Разбиваем массив карточек на подмассивы из 3-х карточек, и формируем новый массив из этих подмассивов
  //для последего подмассива если не хватает карточек до 3-х, дополняем карточками, начиная с первой.
  for (let i: number = 0; i < dataSoonCourses.length; i = i + 3) {
    const arrCardFour: ISoonCourse[] = []
    for (let j: number = 0; j < 3; j++) {
      if (dataSoonCourses[i + j] !== undefined) {
        arrCardFour.push(dataSoonCourses[i + j]);
      } else {
        arrCardFour.push(dataSoonCourses[j - countRemainder]);
      }
    }
    dataSoonArrayOfThree.push(arrCardFour);
  }

  const content = [];
  content.push(
    <StyledSoonContainer>
      <StyledSoonUpperLine>
        <SoonCourseCard name='Java' duration='12 Months\ 120 lessons' startDate='10 October' price={1350}
                        type="Programming"/>
        <SoonCourseCard name='Machine Learning' duration='12 Months\ 120 lessons' startDate='30 November' price={1200}
                        type="Data Science"/>
        <SoonCourseCard name='Web Design' duration='12 Months\ 120 lessons' startDate='10 November' price={1350}
                        type="Design"/>
      </StyledSoonUpperLine>
      <StyledSoonLowerLine>
        <SoonCourseCard name='Python' duration='12 Months\ 120 lessons' startDate='30 November' price={1200}
                        type="Data Science"/>
        <SoonCourseCard name='Frontend' duration='12 Months\ 120 lessons' startDate='10 October' price={1350}
                        type="Programming"/>
        <SoonCourseCard name='Graphic Design' duration='12 Months\ 120 lessons' startDate='10 November' price={1720}
                        type="Design"/>
      </StyledSoonLowerLine>
      <StyledFlex></StyledFlex>
    </StyledSoonContainer>
  );

  return (
    <StyledSoonContainer>
      {
        dataSoonArrayOfThree.map((courses: ISoonCourse[], index) =>
          <>
            {
              courses.map((course: ISoonCourse, index: number) =>
                <StyledSoonUpperLine>
                  <SoonCourseCard
                    key={index}
                    name={course.name}
                    duration={course.duration}
                    startDate={course.startDate}
                    price={course.price}
                    type={course.type}
                  />
                </StyledSoonUpperLine>
              )
            }
            {
              courses.map((course: ISoonCourse, index: number) =>
                <StyledSoonLowerLine>
                  <SoonCourseCard
                    key={index}
                    name={course.name}
                    duration={course.duration}
                    startDate={course.startDate}
                    price={course.price}
                    type={course.type}
                  />
                </StyledSoonLowerLine>
              )
            }
          </>
        )
      }
      {/*<StyledFlex></StyledFlex>*/}
    </StyledSoonContainer>
  )
}

export default SoonStartContainer
