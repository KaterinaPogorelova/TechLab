import React from 'react'
import { StyledPopular } from './styledPopularLayout'
import { StyledContainer, StyledFrameHeader, StyledFrameText } from '../../styledConstants'
import Slider from '../Slider/Slider'
import PopularCourses from './PopularCoursesContainer/PopularCourses'
import PopularMinSlider from './PopularMinSlider/PopularMinSlider'
import PopularMobileSlider from './PopularMobileSlider/PopularMobileSlider'
import LongArrowRight from '../../assets/icons/LongArrowRight'
import { StyledSliderLink } from '../Slider/styledSlider'
import ArrowRight from '../../assets/icons/ArrowRight'

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
          <PopularMinSlider/>
          <PopularMobileSlider/>
          <StyledSliderLink to="#">All popular courses<LongArrowRight /><ArrowRight/></StyledSliderLink>
      </StyledContainer>
    </StyledPopular>
  )
}

export default PopularLayout
