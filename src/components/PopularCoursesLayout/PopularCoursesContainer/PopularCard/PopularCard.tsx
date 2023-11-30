import React from 'react'
import { StyledLinkMore, StyledPopularCardDescription, StyledPopularCardHeader, StyledPopularCardImage, StyledPopularTags, StyledYellowButton } from './styledPopularCard'
import { StyledFlex } from '../../../../styledConstants'
import { StyledCardHorizontalContainer, StyledPopularHorizontalContainer } from '../StyledPopularCourses'
import { NavLink } from 'react-router-dom'
import ArrowRight from '../../../../assets/icons/ArrowRight'

interface IPopular {
  header: string,
  type: "Design" | "Data Science" | "Programming",
  countLessons: number,
  description: string,
  imageSrc: string,
  isVertical?: boolean
}
const PopularCard = ({ header, type, countLessons, description, imageSrc, isVertical }: IPopular) => {
  return (
    <>
      <StyledFlex>
        <StyledCardHorizontalContainer>
          <StyledPopularCardHeader>{header}</StyledPopularCardHeader>
          <StyledPopularTags $type={type} $vertical={isVertical}><span>{type}</span><span>Beginner friendly</span><span>{countLessons} lessons</span></StyledPopularTags>
          { !isVertical &&  <StyledPopularCardDescription $vertical={isVertical}>{description}</StyledPopularCardDescription>}
        </StyledCardHorizontalContainer>
        <StyledPopularCardImage $vertical={isVertical} src={imageSrc} alt="img" />
      </StyledFlex>
         { isVertical &&  <StyledPopularCardDescription $vertical={isVertical}>{description}</StyledPopularCardDescription>}
      <div>
        <StyledYellowButton>Let's start</StyledYellowButton>
        <StyledLinkMore to="#">Learn more <ArrowRight /></StyledLinkMore>
      </div>
    </>
  )
}

export default PopularCard
