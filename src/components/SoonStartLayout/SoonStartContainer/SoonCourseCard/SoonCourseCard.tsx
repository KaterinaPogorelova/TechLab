import React from 'react'
import { StyledDurationCourse, StyledPrice, StyledSoonCard, StyledSoonHeader, StyledStartDate } from './styledSoonCard'

interface ISoonCourse {
  name: string,
  duration: string,
  startDate: string,
  price: number,
  type: "Design" | "Data Science" | "Programming",
}

const SoonCourseCard = ({name, duration, startDate, price, type}: ISoonCourse) => {
  console.log(type)
  return (
    <StyledSoonCard $type={type}>
      <StyledSoonHeader $type={type}>{name}</StyledSoonHeader>
      <StyledDurationCourse>{duration}</StyledDurationCourse>
      <StyledStartDate>Start: {startDate}</StyledStartDate>
      <StyledPrice $type={type}>{price} eur</StyledPrice>
    </StyledSoonCard>
  )
}

export default SoonCourseCard
