import React from 'react'
import { StyledPopular } from './styledPopularLayout'
import { StyledContainer, StyledFrameHeader, StyledFrameText } from '../../styledConstants'

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
      </StyledContainer>
    </StyledPopular>
  )
}

export default PopularLayout
