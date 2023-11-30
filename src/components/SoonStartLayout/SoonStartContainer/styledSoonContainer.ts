import styled from "styled-components";
import { StyledPopularContainer } from "../../PopularCoursesLayout/PopularCoursesContainer/StyledPopularCourses";
import { StyledFlex } from "../../../styledConstants";

export const StyledSoonContainer = styled(StyledPopularContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StyledSoonUpperLine = styled(StyledFlex)`
  justify-content: flex-start;
  gap: 24px;
  @media (max-width: 1270px){
    gap: 20px;
  }
`;
export const StyledSoonLowerLine = styled(StyledFlex)`
  justify-content: flex-end;
  gap: 24px;
`;
