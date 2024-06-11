import styled from "styled-components";
import { colors, typographyGradient } from "../../../styledConstantsColors";
import { Desktop1920 } from "../../../styledConstantsFonts";

export const StyledCourseWorks = styled.div`
  height: 770px;
  padding: 100px 0 0 0;
  border-radius: 0 0 80px 80px;
  background: ${colors.shades.violet6};
  overflow: hidden;
`;
export const StyledCourseWorksContainer = styled.div`
  height: 670px;
  width: 1476px;

  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const StyledWorksTitle = styled.div`
  //   width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  & h3 {
    padding-bottom: 50px;
    font-size: ${Desktop1920.headings.h3.size};
    background: ${typographyGradient.G1};
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const StyledImgWrap = styled.div`
  overflow: hidden;
  width: 598px;
  height: 643px;
  position: absolute;
  right: 0;
  bottom: 0;
  & img {
    overflow: hidden;
    height: 100%;
  }
`;
export const StyledHowWorks = styled.div`
  height: 332px;
  width: 912px;
`;
export const StyledButtonContainer = styled.div`
  padding: 6px;
  width: 504px;
  height: 66px;
  border-radius: 46px;
  background: ${colors.shades.violet4};
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;
`;
export const StyledWorksListContainer = styled.div`
  width: 100%;
  height: 332px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
`;
export const StyledButton = styled.div<{ active: boolean }>`
  border-radius: 40px;
  display: flex;
  align-items: center;
  padding: 20px 24px;

  background: ${(props) =>
    props.active ? colors.shades.violet3 : colors.shades.violet4};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.54px;
  transition: transform 0.3s ease; /* Smooth transition for transform property */

  &:hover {
    transform: scale(1.01); /* Scale the button slightly on hover */
    cursor: pointer;
  }
`;
export const StyledWorksItemContainer = styled.div`
  display: flex;
  width: 287px;
  flex-direction: column;
  align-items: flex-start;
`;
export const StyledWorksItemTitle = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  & span {
    display: flex;
    width: 36px;
    padding: 2px 0px 6px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    background: ${colors.brand.violet};
    margin: 0 8px 0 0;
    color: ${colors.neutral.white};
  }
`;
export const StyledWorksItemText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
  margin: 8px 0 0 0;
  white-space: pre-wrap;
`;
