import styled from "styled-components";
import {
  // backgroundColor,
  colors,
  typographyColor,
} from "../../../styledConstantsColors";

export const StyledLearningContainer = styled.div`
  height: 715px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLearningWrap = styled.div`
  width: 1224px;
  display: flex;
  justify-content: space-between;
`;

export const StyledLearningFormatContainer = styled.div`
  width: 100%;
  height: 495px;
  // border: 1px solid black;
`;

export const StyledLearningSubtitle = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  color: ${colors.neutral.darkBlack};
  margin: 16px 0 9px 0;

  // & span {
  //   color: ${colors.brand.violet};
  // }
`;

// export const StyledLearningSubtitleText = styled.div`
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 24px; /* 150% */
//   letter-spacing: 0.32px;
//   color: ${colors.brand.violet};
// `;

export const StyledLearningList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  // background: ${colors.shades.violet6};
`;

export const StyledLearningFormatItem = styled.div``;
export const StyledLearningFormatItemTitle = styled.div``;
export const StyledLearningFormatList = styled.div``;
export const StyledLearningFormatListItem = styled.div``;

export const StyledLearningItemConainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledAccordeonLearningItem = styled.div`
  display: flex;
  width: 392px;
  min-height: 320px;
  padding: 0px 40px 40px 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 50px;
  border: 1px solid ${colors.brand.violet};
  background: ${colors.shades.violet6};
  // transform: rotate(90deg);

  & ul {
    list-style-position: inside;
  }

  & li {
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    list-style-type: disc;
    margin: 0 0 4px 0;
    // padding-left: 1px;
    // width: 300px;
  }
  & img {
    transfom: rotate(90deg);
  }
  .rotate {
    // transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
    // transform: rotate(90deg);
    animation: rotateAnimation 0.5s linear forwards;
  }
  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
`;

export const StyledAccordeonLerningTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 24px 0 0 0;

  & h3 {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
    color: ${typographyColor.lightBG.violet};
  }
`;
