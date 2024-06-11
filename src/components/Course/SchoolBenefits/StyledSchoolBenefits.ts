import styled from "styled-components";
import { colors, typographyColor } from "../../../styledConstantsColors";

export const StyledSchoolContainer = styled.div`
  height: 368px;
  background: ${colors.shades.violet6};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSchoolWrap = styled.div`
  height: 148px;
  width: 1224px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1439.5px) {
    width: 940px;
  }
  @media (max-width: 1023.5px) {
    width: 704px;
    height: 136px;
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledBenefitContainer = styled.div`
  height: 148px;
  width: 288px;
  @media (max-width: 1439.5px) {
    height: 116px;
    width: 220px;
  }
  @media (max-width: 1023.5px) {
    height: 136px;
    width: 164px;
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledBenefitTitle = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  color: ${typographyColor.lightBG.violet};
  margin-bottom: 20px;
  @media (max-width: 1439.5px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 1023.5px) {
    font-size: 14px;
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;

export const StyledBenefitText = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.32px;
  color: ${colors.neutral.darkBlack};
  @media (max-width: 1439.5px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.28px;
  }
  @media (max-width: 1023.5px) {
    font-weight: 300;
    line-height: 16px;
  }
  @media (max-width: 767.5px) {
  }
  @media (max-width: 479.5px) {
  }
`;
