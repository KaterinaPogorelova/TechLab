import React from 'react'
import { StyledPopular } from '../PopularCoursesLayout/styledPopularLayout'
import { StyledContainer, StyledFrameHeader, StyledFrameText } from '../../styledConstants'
import Slider from '../Slider/Slider'
import LongArrowRight from "../../assets/icons/LongArrowRight";
import ArrowRight from "../../assets/icons/ArrowRight";
import { StyledSliderLink } from "../Slider/styledSlider";
import PopularMinSlider from "../PopularCoursesLayout/PopularMinSlider/PopularMinSlider";
import PopularMobileSlider from "../PopularCoursesLayout/PopularMobileSlider/PopularMobileSlider";
import SoonSliderMin from "./SoonSliderMin/SoonSliderMin";
import SoonSlider from "./SoonSlider/SoonSlider";
import SoonSliderMobile from "./SoonSliderMobile/SoonSliderMobile";

const SoonStartLayout = () => {
  const screenWidth = window.innerWidth;
  return (
    <StyledPopular $isSoon>
      <StyledContainer>
        <StyledFrameHeader>
          Starting <span>soon</span>
        </StyledFrameHeader>
        <StyledFrameText $black>
          Change your life and start a new career with our help.
        </StyledFrameText>
      </StyledContainer>

      <SoonSlider/>
      <SoonSliderMin/>
      <SoonSliderMobile/>

      <StyledContainer>
        <StyledSliderLink to="#">
          All upcoming courses{screenWidth > 1024 ? <LongArrowRight/> : <ArrowRight/>}
        </StyledSliderLink>
      </StyledContainer>
    </StyledPopular>
  )
}

export default SoonStartLayout