import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../../../styledConstantsColors";
import {
  StyledLinkMore,
  StyledYellowButton
} from "../../../PopularCoursesLayout/PopularCoursesContainer/PopularCard/styledPopularCard";

export const StyledMentorCard = styled(NavLink)<{ $cardColor: string }>`
  display: flex;
  width: 392px;
  height: 408px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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

export const StyledMentorHead = styled.div`
  display: flex;
  width: 326px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`

export const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export const StyledName = styled.h4`
  color: #111;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 125% */
`

export const StyledCourse = styled.h5<{ $cardColor: string }>`
  padding: 7px 10px;
  color: ${colors.neutral.white};
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  letter-spacing: 0.48px;
  border-radius: 14px;
  background: ${props => props.$cardColor};
`

export const StyledMentorIcon = styled.img<{ $cardColor: string }>`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  background: ${props => props.$cardColor};
  border-radius: 50%;
  overflow: hidden;
  object-position: 0 5px;
`

export const StyledMentorDescription = styled.p`
  color: #111;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`

export const StyledBuyContainer = styled.div`
  display: flex;
  width: 326px;
  height: 87px;
  align-items: center;
  align-content: center;
  gap: 9px;
  flex-shrink: 0;
  flex-wrap: wrap;
`

export const StyledMentorPrise = styled.div`
  color: #111;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
`

export const StyledButtons = styled.div`
  display: flex;
  width: 326px;
  align-items: center;
  flex-shrink: 0;
`

export const StyledButtonBuy = styled(StyledYellowButton)`
  width: 148px;
`

export const StyledButtonMore = styled(StyledLinkMore)`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  & svg {
    transform: translateY(0);
    width: 20px;
    height: 20px;
  }
`