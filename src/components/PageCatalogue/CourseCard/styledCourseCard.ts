import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors, typographyColor } from "../../../styledConstantsColors";
import { StyledYellowButton } from "../../PopularCoursesLayout/PopularCoursesContainer/PopularCard/styledPopularCard";

export const StyledCourseCard = styled(NavLink)<{ $cardColor: string }>`
  display: flex;
  width: 392px;
  height: 456px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 2px solid ${props => props.$cardColor};
  background: #FFF;
  cursor: pointer;
  transition: all 0.3s ease-out;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
      transform: translate(4px, -4px);
    }
  }

  @media (max-width: 1439.5px) {
  }

  @media (max-width: 1023.5px) {
  }

  @media (max-width: 767.5px) {
  }
`

export const StyledUnitCard = styled(StyledCourseCard)`
  height: 370px;
`

export const StyledCourseHeadContainer = styled.div<{ $isFavorite: boolean }>`
  display: flex;
  min-height: 100px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  align-self: stretch;

  & svg {
    min-width: 40px;
  }

  & svg path {
    fill: ${props => props.$isFavorite ? '#111111' : '#FFF'};
    transition: fill 0.3s ease-out;
  }

`

export const StyledCourseHeadName = styled.div<{ $cardColor: string }>`
  color: ${props => props.$cardColor};
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;
`

export const StyledUnitHeadName = styled(StyledCourseHeadName)`
  font-size: 32px;
  font-weight: 400;
  line-height: 40px; /* 125% */
`

export const StyledIconHeart = styled.img`
  width: 40px;
  height: 40px;
`

export const StyledTagsContainer = styled.div`
  display: flex;
  height: 68px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px 8px;
  flex-shrink: 0;
  align-self: stretch;
  flex-wrap: wrap;
`

const StyledTag = styled.div`
  color: #FFF;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  letter-spacing: 0.48px;
  padding: 7px 10px;
  border-radius: 14px;
  box-sizing: border-box;
`

export const StyledCourse = styled(StyledTag)<{ $cardColor: string }>`
  background: ${props => props.$cardColor};
  border: 1px solid ${props => props.$cardColor};
`

export const StyledLevel = styled(StyledTag)`
  border: 1px solid ${colors.brand.turquoise};
  background: ${typographyColor.lightBG.turquoise};
`

export const StyledDuration = styled(StyledTag)<{ $cardColor: string }>`
  color: ${props => props.$cardColor};
  border: 1px solid ${props => props.$cardColor};
`

export const StyledNew = styled(StyledTag)<{ $cardColor: string }>`
  color: ${colors.brand.orange};
  border: 1px solid ${colors.brand.orange};
`

export const StyledDescription = styled.p`
  color: #111;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`

export const StyledPriceButtonContainer = styled.div`
  display: flex;
  width: 326px;
  height: 108px;
  align-items: center;
  align-content: center;
  gap: 8px 8px;
  flex-shrink: 0;
  flex-wrap: wrap;
`

export const StyledPriceContainer = styled.div`
  display: flex;
  width: 326px;
  height: 58px;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex-shrink: 0;
`

export const StyledPriceInfo = styled.div`
  color: #111;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
`

export const StyledPriceGroupStartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`

export const StyledStartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const StyledStartCalendar = styled.img`
  width: 20px;
  height: 20px;
`

export const StyledStartInfo = styled.div`
  color: ${colors.neutral.gray};
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
`

export const StyledButtonBuyCourse = styled(StyledYellowButton)`
  padding: 8px 0;
  width: 148px;
  height: 42px;
  font-size: 18px;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.54px;
`