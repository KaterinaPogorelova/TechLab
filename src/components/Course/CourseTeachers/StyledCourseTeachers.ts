import styled from "styled-components";
import {
  colors,
  gradient,
  typographyColor,
} from "../../../styledConstantsColors";

export const StyledCourseTeachers = styled.div`
  // height: 902px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.neutral.lightGray};
  border-radius: 0px 0px 80px 80px;
  overflow: hidden;
  padding: 100px 0 120px 0;
`;

export const StyledCourseTeachersContainer = styled.div`
  display: flex;
  width: 1224px;
  padding-bottom: 50px;
  flex-direction: column;
  //   align-items: center;
  & > h3 {
    margin: 0;
  }
  & p {
    margin: 16px 0 8px 0;
  }
`;
export const StyledCourseTeachersText = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
  color: ${typographyColor.lightBG.violet};
`;
export const StyledCourseTeachersCards = styled.div`
  width: 100%;
  max-height: 808px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px;
  flex-wrap: wrap;
`;
export const StyledCourseTeachersCardsContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  padding-top: 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 182px;
`;
export const StyledCourseTeachersCardsButton = styled.div`
  height: 48px;
  width: 299px;
  // border: none;
  padding: 0;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: 0.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 10px;

  & img {
    width: 48px;
    height: 48px;
  }
`;

export const StyledCourseTeachersCardContainer = styled.div`
  width: 382px;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  // justify-content: center;
  // align-items: end;
  //gap: 1px;
  border-radius: 50px;
  border: 1px solid ${colors.brand.violet};
  & div:first-child:hover {
    background: ${colors.brand.violet};
  }
`;
export const StyledCourseTeacherCardImage = styled.div`
  position: relative;
  width: 381px;
  height: 257px;
  display: flex;
  justify-content: center;
  background: ${gradient.violetLight};
  border-radius: 50px 50px 0 0;

  & img:first-child {
    width: 319px;
    height: 255px;
    object-fit: contain;
  }
  & img:last-child {
    position: absolute;
    width: 72px;
    height: 72px;
    top: 23px;
    right: 22px;
  }
`;
export const StyledCourseTeacherCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & span:first-child {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    padding: 0 0 8px 0;
  }
  & span:nth-child(2),
  span:nth-child(3) {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  & span:last-child {
    padding: 8px 0 0 0;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
`;
