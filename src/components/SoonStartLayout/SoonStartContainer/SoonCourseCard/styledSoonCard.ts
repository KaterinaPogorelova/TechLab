import styled from "styled-components";
import {
  StyledPopularCardHeader
} from "../../../PopularCoursesLayout/PopularCoursesContainer/PopularCard/styledPopularCard";
import { colors, typographyColor } from "../../../../styledConstantsColors";

export const StyledSoonCard = styled.div<{ $type?: string; }>`
  border: 2px solid;
  border-color: ${(props) => {
    if (props.$type === "Design") return colors.brand.violet;
    if (props.$type === "Data Science") return colors.brand.orange;
    if (props.$type === "Programming") return colors.brand.green;
  }};
  border-radius: 40px;
  width: 320px;
  height: 220px;
  padding: 18px 30px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  background-color: white;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    }
  }

  @media (max-width: 1439.5px) {
    width: 280px;
    height: 200px;
    padding: 18px 24px 20px 24px;
  }

  @media (max-width: 1023.5px) {
    width: 254px;
    height: 164px;
    padding: 10px 24px;
    border-radius: 20px;
    &:nth-child(odd) {
      margin-left: 10%;
    }

    &:nth-child(even) {
      margin-right: 10%;
    }
  }

  @media (max-width: 767.5px) {
    min-width: 236px;
    height: 190px;
    padding: 18px 20px;
    border-radius: 30px;
    &:nth-child(odd) {
      margin: 0;
    }

    &:nth-child(even) {
      margin: 0;
    }
  }
`;

export const StyledSoonHeader = styled(StyledPopularCardHeader)<{
  $type?: "Design" | "Data Science" | "Programming";
}>`
  color: ${(props) => {
    if (props.$type === "Design") return typographyColor.lightBG.violet;
    if (props.$type === "Data Science") return typographyColor.lightBG.orange;
    if (props.$type === "Programming") return typographyColor.lightBG.green;
  }};
  height: 75px;
  line-height: 35px;
  @media (max-width: 1439.5px) {
    height: 52px;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: 0.78px;
  }
  @media (max-width: 1023.5px) {
    height: 64px;
    font-size: 24px;
    line-height: 26px;
  }
  @media (max-width: 767.5px) {
    height: 56px;
    font-size: 26px;
    line-height: 28px;
  }
  @media (max-width: 479.5px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

export const StyledDurationCourse = styled.p<{
  $type?: string;
}>`
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 5px 0;
  color: ${typographyColor.lightBG.darkGray};
  @media (max-width: 1439.5px) {
    font-size: 16px;
  }
  @media (max-width: 1023.5px) {
    padding: 0;
    font-size: 14px;
  }
  @media (max-width: 767.5px) {
    padding: 0;
    font-size: 16px;
    line-height: 28px;
  }
`;

export const StyledStartDate = styled(StyledDurationCourse)`
  color: black;
  @media (max-width: 1439.5px) {
    font-size: 16px;
  }
  @media (max-width: 1023.5px) {
    font-size: 14px;
  }
  @media (max-width: 767.5px) {
    font-size: 16px;
  }
`
export const StyledPrice = styled(StyledDurationCourse)<{
  $type?: "Design" | "Data Science" | "Programming";
}>`
  color: ${(props) => {
    if (props.$type === "Design") return typographyColor.lightBG.violet;
    if (props.$type === "Data Science") return typographyColor.lightBG.orange;
    if (props.$type === "Programming") return typographyColor.lightBG.green;
  }};
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  @media (max-width: 1439.5px) {
    font-size: 22px;
  }
  @media (max-width: 1023.5px) {
    font-size: 20px;
    line-height: 24px;
  }
  @media (max-width: 767.5px) {
    font-size: 22px;
    line-height: 31px;
  }
`