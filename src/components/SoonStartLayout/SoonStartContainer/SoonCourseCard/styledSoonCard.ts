import styled from "styled-components";
import { StyledPopularCardHeader } from "../../../PopularCoursesLayout/PopularCoursesContainer/PopularCard/styledPopularCard";
import { colors, typographyColor } from "../../../../styledConstantsColors";

export const StyledSoonCard = styled.div<{
  $type?: string;
}>`
  border: 2px solid ;
  border-color:  ${(props) => {
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
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  }
  @media (max-width: 1270px) {
    width: 280px;
    height: 200px;
    padding: 18px 24px 20px 24px;
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
  @media (max-width: 1270px) {
    height: 52px;
    font-size: 26px;
    line-height: 26px;
    letter-spacing: 0.78px;
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
  @media (max-width: 1270px) {
    font-size: 16px;
  }
`;

export const StyledStartDate = styled(StyledDurationCourse)`
color: black;
@media (max-width: 1270px) {
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
  @media (max-width: 1270px) {
    font-size: 22px;
  }
`