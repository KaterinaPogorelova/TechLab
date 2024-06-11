import styled from "styled-components";
import { colors, typographyColor } from "../../../styledConstantsColors";

export const StyledCoursePotfolio = styled.div`
  height: 763px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: ${colors.neutral.darkBlack};
  width: 100%;
  padding: 100px 0px 120px 0px;
  border-radius: 0px 0px 80px 80px;
  & div > h3 {
    color: ${colors.neutral.white};
  }
`;
export const StyledPortfolioItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 16px;
  justify-content: space-between;
  width: 392px;
  height: 271px;
  position: relative;
  cursor: pointer;
  transition: filter 0.3s;
  filter: brightness(80%);

  &:hover {
    filter: brightness(100%);
  }

  &.active {
    filter: none;
  }
`;
export const StyledPortfolioItemCase = styled.div`
  display: flex;
  width: 392px;
  height: 222px;
  // justify-content: center;
  // align-items: center;

  & img {
    border-radius: 40px;
  }
`;
export const StyledPortfolioItemInfo = styled.div`
  display: flex;
  // width: 392px;
  // height: 222px;
  // justify-content: center;
  // align-items: center;
  // flex-shrink: 0;
`;
export const StyledPortfolioItemAvatar = styled.div`
  width: 33px;
  margin: 16px 20px 0 10px;
  display: flex;
  // flex-wrap: wrap;
  width: 33px;
  height: 33px;
  justify-content: center;
  align-items: center;
  & img {
    border-radius: 15px;
  }
`;
export const StyledPortfolioItemTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.48px;
  color: ${typographyColor.darkBG.white};
  padding-top: 16px;

  & span {
    font-weight: 700;
  }
`;
export const StyledPortfolioSwiper = styled.div`
  width: 100%;
`;
