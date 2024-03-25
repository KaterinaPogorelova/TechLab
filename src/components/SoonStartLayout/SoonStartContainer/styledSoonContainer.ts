import styled from "styled-components";
import { StyledPopularContainer } from "../../PopularCoursesLayout/PopularCoursesContainer/StyledPopularCourses";
import { StyledFlex } from "../../../styledConstants";

export const StyledSoonContainer = styled(StyledPopularContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1224px;

  @media (max-width: 1439.5px) {
    max-width: 980px;
  }

  @media (max-width: 1023.5px) {
    height: 380px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 767.5px) {
    height: 200px;
  }
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
