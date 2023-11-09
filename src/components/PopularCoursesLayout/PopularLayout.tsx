import React from 'react'
import { StyledPopular } from './styledPopularLayout'
import { StyledContainer, StyledFrameHeader, StyledFrameText } from '../../styledConstants'
import Slider from '../Slider/Slider'
import PopularCourses from './PopularCoursesContainer/PopularCourses'

const PopularLayout = () => {
  return (
    <StyledPopular>
      <StyledContainer>
      <StyledFrameHeader>
            Our <span>most popular</span> courses.
          </StyledFrameHeader>
          <StyledFrameText $black>
          See the courses most commonly chosen by students
          </StyledFrameText>
          <Slider content={<PopularCourses/>} nameLink='All popular courses'/>
      </StyledContainer>
    </StyledPopular>
  )
}

export default PopularLayout
