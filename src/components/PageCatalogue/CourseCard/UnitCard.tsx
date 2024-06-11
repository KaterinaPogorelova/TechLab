import React, { useState } from "react";
import {
  StyledButtonBuyCourse, StyledCourse, StyledCourseHeadContainer, StyledDuration,
  StyledLevel, StyledNew, StyledPriceButtonContainer,
  StyledPriceContainer, StyledPriceInfo, StyledTagsContainer, StyledUnitCard, StyledUnitHeadName
} from "./styledCourseCard";
import {
  StyledButtonMore, StyledButtons
} from "../../PageAboutSchool/AboutSchoolOurExperts/MentorCard/styledMentorCard";
import type { IdataUnit } from "../../../data/dataUnits";
import ArrowRight from "../../../assets/icons/ArrowRight";
import { ReactComponent as IconHeart } from "../../../assets/icons/HeartIcon.svg";

export const UnitCard: React.FC<IdataUnit> = (unit) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handlerCourseCard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  }

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  }

  return (
    <StyledUnitCard to={`/`} $cardColor={unit.color} onClick={handlerCourseCard}>
      <StyledCourseHeadContainer $isFavorite={isFavorite}>
        <StyledUnitHeadName $cardColor={unit.color}>{unit.name}</StyledUnitHeadName>
        <IconHeart onClick={toggleFavorite} />
      </StyledCourseHeadContainer>
      <StyledTagsContainer>
        <StyledCourse $cardColor={unit.color}>{unit.course}</StyledCourse>
        <StyledLevel>{unit.level}</StyledLevel>
        <StyledDuration $cardColor={unit.color}>{`${unit.durationHours} month`}</StyledDuration>
        <StyledNew>New</StyledNew>
      </StyledTagsContainer>
      <StyledPriceButtonContainer>
        <StyledPriceContainer>
          <StyledPriceInfo>{`${unit.price} eur / Self-paced`}</StyledPriceInfo>
        </StyledPriceContainer>
        <StyledButtons>
          <StyledButtonBuyCourse>Add to cart</StyledButtonBuyCourse>
          <StyledButtonMore to={`/`}>Show details<ArrowRight /></StyledButtonMore>
        </StyledButtons>
      </StyledPriceButtonContainer>
    </StyledUnitCard>
  )
}