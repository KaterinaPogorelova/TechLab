import styled from "styled-components";
import { colors } from "../../../styledConstantsColors";
export const StyledFeedbackCourseSection = styled.div`
  height: 825px;
  background: ${colors.neutral.darkBlack};
  padding: 100px 0 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const StyledFeedbackCourseContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  & h3 {
    color: ${colors.neutral.white};
  }
`;

export const StyledFormCourse = styled.form`
  width: 100%;
  display: flex;
  gap: 24px;
  & > div {
    margin: 0;
  }
  & input {
    background: ${colors.neutral.white};
  }

  & button {
    display: flex;
    min-width: 182px;
    height: 58px;
    // padding: 16px 24px;
    padding: 0;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.54px;
    margin-top: 35px;
  }
`;
