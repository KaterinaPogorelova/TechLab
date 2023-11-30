import React from 'react'
import { StyledPopular } from '../PopularCoursesLayout/styledPopularLayout'
import { StyledContainer, StyledFrameHeader, StyledFrameText } from '../../styledConstants'
import SoonStartContainer from './SoonStartContainer/SoonStartContainer'
import Slider from '../Slider/Slider'

const SoonStartLayout = () => {
  return (
    <StyledPopular $isSoon>
      <StyledContainer>
        <StyledFrameHeader>
          Starting <span>soon</span>
        </StyledFrameHeader>
        <StyledFrameText $black>
        Change your life and start a new career with our help.
          </StyledFrameText>
          <Slider content={<SoonStartContainer/>} nameLink='All latest courses'/>
      </StyledContainer>
    </StyledPopular>
  )
}

export default SoonStartLayout
