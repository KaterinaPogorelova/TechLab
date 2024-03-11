import styled from "styled-components";
import { colors, hoverBtnColor, typographyColor } from "../../../../styledConstantsColors";
import { NavLink } from "react-router-dom";

export const StyledPopularCardHeader = styled.p`
  max-width: 100%;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  @media(max-width: 1439.5px){
    font-size: 26px;
  }
  @media(max-width: 1023.5px){
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.96px;
  }
  @media(max-width: 767.5px){
    width:235px;
    font-size: 26px;
    line-height: 28px;
  }
  @media(max-width: 479.5px){
    width:100%;
  }
`;

export const StyledPopularTags = styled.div<{
  $vertical?: boolean;
  $type?: "Design" | "Data Science" | "Programming";
}>`
  width: ${(props) => (props.$vertical ? "73%" : "100%")};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.48px;
  color: ${colors.neutral.white};

  & span {
    display: inline-block;
    padding: 7px 10px;
    border-radius: 14px;
    background-color: ${typographyColor.lightBG.turquoise};
    margin: 5px;
  }
  & span:last-child {
    border: 1px solid ${typographyColor.lightBG.turquoise};
    color: ${typographyColor.lightBG.turquoise};
    background-color: ${colors.neutral.white};
  }
  & span:first-child {
    margin-top: -5px;
    background-color: ${(props) => {
    if (props.$type === "Design") return colors.brand.violet;
    if (props.$type === "Data Science") return colors.brand.orange;
    if (props.$type === "Programming") return typographyColor.lightBG.green;
  }};
  }
  @media(max-width: 1439.5px){
    font-size: 12px;
    width: 130px;
    & span {
      padding: 5px 7px;
      margin: 3.5px;
    }
  }
  @media(max-width: 1023.5px){
    width:164px;
    margin-top:20px;
    & span {
      padding: 7px 10px;
      font-size: 16px;
    }
  }
  @media(max-width: 767.5px){
    margin-top:32px;
    & span {
      padding: 5px 8px;
      font-size: 14px;
      margin: 3px;
    }
  }
  @media(max-width: 479.5px){
    margin-top:10px;
    width:157px;
    & span {
      padding: 5px 7px;
      font-size: 12px;
      margin: 3.5px;
    }
  }
`;

export const StyledPopularCardDescription = styled.p<{ $vertical?: boolean }>`
  width: 100%;
  height: ${(props) => (props.$vertical ? "200px" : "auto")};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.32px;
  margin-top: ${(props) => (props.$vertical ? "136px" : "0px")};
  margin-bottom: 0px;
  @media(max-width: 1439.5px){
    margin-top: ${(props) => (props.$vertical ? "32px" : "14px")};
    font-size: 14px;
    line-height: 18px;
    height: ${(props) => (props.$vertical ? "92px" : "90px")};
    margin-bottom: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media(max-width: 1023.5px){
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.48px;
  }
  @media(max-width: 767.5px){
    margin-top: ${(props) => (props.$vertical ? "18px" : "0px")};
    line-height: 22px;
    height: ${(props) => (props.$vertical ? "112px" : "110px")};
  }
  @media(max-width: 479.5px){
    margin-top: ${(props) => (props.$vertical ? "32px" : "14px")};
    height: ${(props) => (props.$vertical ? "134px" : "132px")};
  }
`;

export const StyledPopularCardImage = styled.img<{ $vertical?: boolean }>`
  max-width: 192px;
  position: relative;
  top: ${(props) => (props.$vertical ? "76px" : "0")};
  right: 0;
  @media(max-width: 1439.5px){
    position: absolute;
    top: 65px;
    max-width: 115px;
    height: 110px;
  }
  @media(max-width: 1023.5px){
    max-width: 135px;
    height: 140px;
  }
  @media(max-width: 767.5px){
    top: 0px;
    max-width: 163px;
    height: 174px;
  }
  @media(max-width: 479.5px){
    top: 35px;
    max-width: 115px;
    height: 110px;
  }
`;

export const StyledYellowButton = styled.button`
  padding: 10px 32px;
  background-color: ${colors.brand.yellow};
  border-radius: 100px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.6px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: black;
    transition: all 0.3s;
    border-radius: 10rem;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &:before {
      width: 100%;
    }
  }
  @media(max-width: 1439.5px){
    padding: 6px 16px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
  }
  @media(max-width: 1023.5px){
    padding: 10px 24px;
    font-size: 16px;
    letter-spacing: 0.1px;
  }
  @media(max-width: 767.5px){
    padding: 12px 16px;
    font-size: 18px;
    line-height: 20px;
  }
  @media(max-width: 479.5px){
    padding: 10px 16px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const StyledLinkMore = styled(NavLink)`
 padding: 10px 31px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.54px;
  transition: all 0.3s ease-in-out;
  & svg {
    transform: translateY(7px);
  }

  &:hover {
    color: ${hoverBtnColor.yellow};

    svg {
      path {
        fill: ${hoverBtnColor.yellow};
      }
    }
  }
  @media(max-width: 1439.5px){
    padding: 6px 8px;
    font-size: 14px;
    svg {
      padding-top: 3px;
    }
  }
  @media(max-width: 1023.5px){
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    svg {
      width:20px;
      height:20px;
      padding-top: 0px;
    }
  }
  @media(max-width: 767.5px){
    font-size: 18px;
    padding: 12px 16px;
    margin-left:14px;
  }
  @media(max-width: 479.5px){
    font-size: 14px;
  }
`