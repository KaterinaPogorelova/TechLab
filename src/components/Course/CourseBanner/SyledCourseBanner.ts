import styled from "styled-components";
import { colors, typographyGradient } from "../../../styledConstantsColors";
// import image from "../../../assets/img/ZeusUIux.png";
// <{ isFixed: boolean }><{ offsetY: number }>background-position-y: ${(props) => props.offsetY}px;
export const StyledCourseContainer = styled.div`
  height: 471px;
  // height: 100%;
  display: flex;
  justify-content: center;
  background: ${typographyGradient.G1};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // position: relative;
  // z-index: 0;
`;

export const StyledCourseWrap = styled.div`
  width: 1224px;
  display: flex;
  justify-content: space-between;
  // align-items: end;

  // ----------
  // position: relative;
  // z-index: 0;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: end;
  // background-size: cover;
  // background-repeat: no-repeat;
  // width: 659px;
  // height: 394px;
  z-index: 0;
  // border: 1px solid black;
  // background: green;
`;

export const StyledCourseBannerText = styled.div`
  display: flex;
  width: 600px;
  height: 262px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 107.143% */
  letter-spacing: 1.68px;
  color: ${colors.neutral.white};
  margin: 77px 0 0 0;
`;
