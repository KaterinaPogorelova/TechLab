import styled from "styled-components";
import { colors, typographyGradient } from "../../../styledConstantsColors";

export const StyledRatingWrap = styled.div`
  display: flex;
  height: 328px;
  background: ${colors.neutral.lightGray};
  padding: 100px 0 120px 0;
  & > * > div {
    gap: 24px;
  }
`;

export const StyledRatingItemContainer = styled.div`
  display: flex;
  width: 288px;
  justify-content: center;
  align-items: center;
  background: ${colors.neutral.darkBlack};
  border-radius: 30px;
`;
export const StyledRatingItemTitle = styled.div`
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px; /* 107.143% */
  letter-spacing: 1.68px;
  background: ${typographyGradient.G1};
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 16px;
`;
export const StyledRatingItemText = styled.div`
  display: flex;
  width: 146px;
  height: 108px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
  color: ${colors.neutral.white};
  & span:last-child {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    margin-top: 2px;
  }
`;
