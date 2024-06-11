import styled from "styled-components";
import {
  backgroundColor,
  colors,
  gradient,
  typographyColor,
  typographyGradient,
} from "../../styledConstantsColors";
import lineLeft from "../../assets/img/lineLeft.png";
import lineRight from "../../assets/images/VectorCourseRight.svg";

export const StyledMainWrap = styled.div`
  display: flex;
  width: 1224px;
  justify-content: space-between;
`;

export const StyledMainInfoWrap = styled.main<{ $isRunlineClosed: boolean }>`
  position: relative;
  // height: 580px;
  // width: 100%;
  height: 688px;
  // height: ${(props) => (props.$isRunlineClosed ? "588px" : "638px")}
  display: flex;
  padding: ${(props) =>
    props.$isRunlineClosed ? "89px 0 100px" : "139px 0 100px"};
  background: ${gradient.violetDark};
  border-radius: 0px 0px 80px 80px;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    background: url(${lineLeft});
    background-repeat: no-repeat;
    top: 78px;
    // left: 200px;
    left: 11%;
    width: 50%;
    height: 100%;
    stroke-width: 2px;
    opacity: 0.2;

    @media (max-width: 1439.5px) {
      width: 43%;
      left: -60px;
    }
    @media (max-width: 1023.5px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    transform: rotate(360deg);
    background: url(${lineRight});
    background-repeat: no-repeat;
    top: 168px;
    // right: 20px;
    // right: 1%;
    left: 54%;
    width: 50%;
    height: 500px;
    flex-shrink: 0;
    // stroke: ${backgroundColor.violet40};
    stroke: white;
    stroke-width: 2px;

    @media (max-width: 1439.5px) {
      width: 57%;
    }
    @media (max-width: 767.5px) {
      width: 100%;
      top: 160px;
      right: 125px;
    }
    @media (max-width: 479.5px) {
      display: none;
    }
  }
  @media (max-width: 1439.5px) {
    padding: ${(props) =>
      props.$isRunlineClosed ? "128px 0 75px" : "163px 0 75px"};
  }
  @media (max-width: 1024px) {
    padding: ${(props) =>
      props.$isRunlineClosed ? "132px 0 89px" : "174px 0 89px"};
    border-radius: 0px 0px 0px 0px;
  }
  @media (max-width: 767.5px) {
    padding: ${(props) =>
      props.$isRunlineClosed ? "104px 0 52px" : "146px 0 52px"};
  }
  @media (max-width: 479.5px) {
    padding: ${(props) =>
      props.$isRunlineClosed ? "124px 0 67px" : "158px 0 67px"};
  }
`;

export const StyledInfoWrap = styled.div`
  position: relative;
  z-index: 2;
  // border: 1px solid white;
  width: 704px;
  height: 390px;
  margin: 62px 0 128px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1439.5px) {
    width: 540px;
    height: 330px;
    margin: 40px 0 100px 0;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledTitle = styled.h2`
  font-size: 72px;
  font-style: normal;
  font-weight: 800;
  line-height: 80px;
  color: ${colors.brand.violet};
  @media (max-width: 1439.5px) {
    font-size: 56px;
    line-height: 60px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledTitleText = styled.div`
  max-width: 184px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  color: ${colors.neutral.white};
  @media (max-width: 1439.5px) {
    max-width: 140px;
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
// export const StyledTitleContainer = styled.div`
//   max-width: 131px;
//   display: flex;
// `;
export const StyledInfoContainer = styled.div`
  max-width: 600px;
  height: 58px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439.5px) {
    max-width: 460px;
    height: 50px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledInfoCourseFormat = styled.div`
  max-width: 131px;

  @media (max-width: 1439.5px) {
    max-width: 140px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
export const StyledInfoContainerDuration = styled.div`
  max-width: 155px;
  @media (max-width: 1439.5px) {
    max-width: 140px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
export const StyledInfoCourse = styled.div`
  max-width: 188px;

  @media (max-width: 1439.5px) {
    max-width: 140px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
export const StyledInfoCourseTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.3px;
  margin-bottom: 4px;
  color: ${colors.neutral.white};
  @media (max-width: 1439.5px) {
    font-size: 14px;
    line-height: 18px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
  & span {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.32px;
  }
`;
export const StyledInfoCourseText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 100% */
  letter-spacing: 0.48px;
  color: ${colors.brand.violet};
  opacity: 0.6;

  @media (max-width: 1439.5px) {
    font-size: 12px;
    line-height: 14px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledFlexCourse = styled.div`
  display: flex;
  justify-content: start;
  gap: 30px;

  @media (max-width: 1439.5px) {
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
  // border: 1px solid white;
`;
export const StyledTodayButton = styled.button`
  height: 72px;
  width: 267px;
  background: ${typographyGradient.G1};
  display: flex;
  padding: 16px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  &:hover {
    background: ${colors.brand.turquoise};
  }

  @media (max-width: 1439.5px) {
    height: 60px;
    width: 199px;
    padding: 14px 32px;
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
export const StyledViewButton = styled.button`
  height: 72px;
  width: 332px;
  border: 1px solid ${typographyColor.darkBG.violet};
  background: ${typographyGradient.G1};
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border-radius: 100px;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  &:hover {
    background: ${colors.brand.turquoise};
    border: 1px solid ${colors.brand.turquoise};
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 1439.5px) {
    height: 60px;
    width: 247px;
    font-size: 24px;
    line-height: 32px;
  }
  @media (max-width: 1023.5px) {
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
//  border: 1px solid white;
export const StyledImgWrap = styled.div`
  position: relative;
  z-index: 2;
  width: 495px;
  height: 519px;

  & img {
    width: 100%;
  }
  @media (max-width: 1439.5px) {
    width: 477px;
    height: 473px;
  }
  @media (max-width: 1023.5px) {
    // max-width: 45%;
  }

  @media (max-width: 767.5px) {
    // position: absolute;
    // z-index: 1;
    // top: -50px;
    // right: 0;
    // max-width: 432px;
  }

  @media (max-width: 479.5px) {
    // top: 0px;
    // max-width: 200px;
  }
`;

// @media (max-width: 1439.5px) {

// }
// @media (max-width: 1023.5px) {

// }
// @media (max-width: 767.5px) {

// }
// @media (max-width: 479.5px) {

// }
