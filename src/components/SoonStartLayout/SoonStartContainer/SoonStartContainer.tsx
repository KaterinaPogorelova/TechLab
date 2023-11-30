import { StyledFlex } from '../../../styledConstants'
import SoonCourseCard from './SoonCourseCard/SoonCourseCard'
import { StyledSoonContainer, StyledSoonLowerLine, StyledSoonUpperLine } from './styledSoonContainer'

const SoonStartContainer = () => {

  return (
    <StyledSoonContainer>
      <StyledSoonUpperLine>
        <SoonCourseCard name='Java' duration='12 Months\ 120 lessons' startDate='10 October' price={1350} type="Programming" />
        <SoonCourseCard name='Machine Learning' duration='12 Months\ 120 lessons' startDate='30 November' price={1200} type="Data Science" />
        <SoonCourseCard name='Web Design' duration='12 Months\ 120 lessons' startDate='10 November' price={1350} type="Design" />
      </StyledSoonUpperLine>
      <StyledSoonLowerLine>
        <SoonCourseCard name='Python' duration='12 Months\ 120 lessons' startDate='30 November' price={1200} type="Data Science" />
        <SoonCourseCard name='Frontend' duration='12 Months\ 120 lessons' startDate='10 October' price={1350} type="Programming" />
        <SoonCourseCard name='Graphic Design' duration='12 Months\ 120 lessons' startDate='10 November' price={1720} type="Design" />
      </StyledSoonLowerLine>
      <StyledFlex></StyledFlex>
    </StyledSoonContainer>
  )
}

export default SoonStartContainer
