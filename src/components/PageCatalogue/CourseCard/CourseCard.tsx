import React, { useState } from "react";
import {
  StyledButtonBuyCourse, StyledCourse, StyledCourseCard, StyledCourseHeadContainer, StyledCourseHeadName,
  StyledDescription, StyledDuration, StyledLevel, StyledNew, StyledPriceButtonContainer,
  StyledPriceContainer, StyledPriceGroupStartContainer, StyledPriceInfo, StyledStartCalendar, StyledStartContainer,
  StyledStartInfo, StyledTagsContainer
} from "./styledCourseCard";
import {
  StyledButtonMore, StyledButtons
} from "../../PageAboutSchool/AboutSchoolOurExperts/MentorCard/styledMentorCard";
import type { IdataCourse } from "../../../data/dataCourses";
import ArrowRight from "../../../assets/icons/ArrowRight";
import calendar from '../../../assets/icons/calendar.svg';
import { ReactComponent as IconHeart } from "../../../assets/icons/HeartIcon.svg";

export const CourseCard: React.FC<IdataCourse> = (course) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handlerCourseCard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  }

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  }

  return (
    <StyledCourseCard to={`/`} $cardColor={course.color} onClick={handlerCourseCard}>
      <StyledCourseHeadContainer $isFavorite={isFavorite}>
        <StyledCourseHeadName $cardColor={course.color}>{course.name}</StyledCourseHeadName>
        <IconHeart onClick={toggleFavorite}/>
      </StyledCourseHeadContainer>
      <StyledTagsContainer>
        <StyledCourse $cardColor={course.color}>{course.course}</StyledCourse>
        <StyledLevel>{course.level}</StyledLevel>
        <StyledDuration $cardColor={course.color}>{`${course.durationMonths} month`}</StyledDuration>
        <StyledNew>New</StyledNew>
      </StyledTagsContainer>
      <StyledDescription>{course.descriptionShort}</StyledDescription>
      <StyledPriceButtonContainer>
        <StyledPriceContainer>
          <StyledPriceInfo>{`${course.priceSelf} eur / Self-paced`}</StyledPriceInfo>
          <StyledPriceGroupStartContainer>
            <StyledPriceInfo>{`${course.priceGroup} eur / In group`}</StyledPriceInfo>
            <StyledStartContainer>
              <StyledStartCalendar src={calendar} alt='calendar' />
              <StyledStartInfo>{`Start: ${course.startDate}`}</StyledStartInfo>
            </StyledStartContainer>
          </StyledPriceGroupStartContainer>
        </StyledPriceContainer>
        <StyledButtons>
          <StyledButtonBuyCourse>Add to cart</StyledButtonBuyCourse>
          <StyledButtonMore to={`/`}>Learn more<ArrowRight /></StyledButtonMore>
        </StyledButtons>
      </StyledPriceButtonContainer>
    </StyledCourseCard>
  )
}