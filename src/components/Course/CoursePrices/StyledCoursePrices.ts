import styled from "styled-components";
import {
  backgroundColor,
  colors,
  gradient,
  typographyColor,
} from "../../../styledConstantsColors";

export const StyledCoursePrices = styled.div`
  display: flex;
  height: 100%;
  padding: 100px 0 120px 0;
  height: 831px;
  background: ${colors.neutral.darkBlack};
  border-radius: 0px 0px 80px 80px;
  // overflow: hidden;
  & > * > div {
    align-items: flex-start;
    gap: 22px;
  }
  background-attachment: fixed;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
`;
export const StyledCoursePricesWrap = styled.div`
  width: 1224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 212px;
  align-self: stretch;
`;
export const StyledCoursePricesTitleContainer = styled.div`
  width: 1224px;
  margin: 0 0 50px 0;
  & h3 {
    color: ${colors.neutral.white};
  }
`;
export const StyledCoursePricesTitleText = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  padding: 16px 0 8px 0;
  color: ${colors.neutral.white};
  & span {
    color: ${typographyColor.darkBG.violet};
  }
`;
export const StyledCoursePricesTitleSubText = styled.p`
  color: ${typographyColor.darkBG.violet};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
`;

export const StyledCoursePricesItem = styled.div`
  // position: absolute;
  // bottom: 1px;
  // left: 1px;
  // width: calc(100% - 2px);
  // height: calc(100% - 2px);
  // justify-content: flex-start;
  // width: 392px;
  // gap: 24px;
  background: ${backgroundColor.black};
  display: flex;
  padding: 24px 40px 40px 40px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 50px;

  position: relative;
  z-index: 1;
  border: 1px solid ${colors.brand.violet};

  &:hover {
    background: linear-gradient(
      154deg,
      rgba(134, 87, 221, 0.1) 0%,
      rgba(103, 209, 209, 0.1) 100%
    );
  }
`;
export const StyledCoursePricesItemWrap = styled.div`
  position: "absolute";
  top: "-1px";
  left: "-1px";
  right: "-1px";
  bottom: "-1px";
  border: "1px solid white";
  // width: calc(100% + 2px);
  // height: calc(100% + 2px);
`;
export const StyledCoursePricesItemTitle = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  padding-bottom: 24px;
  color: ${colors.neutral.white};
`;
export const StyledCoursePricesItemList = styled.div`
  display: block;
`;
export const StyledCoursePricesListItem = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  color: ${colors.neutral.white};
  display: flex;
  align-items: center;
  & img {
    width: 18.915px;
    height: 14.082px;
    margin-right: 16px;
  }
`;
export const StyledCoursePricesItemPrice = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px; /* 125% */
  letter-spacing: 1.6px;
  color: ${colors.brand.turquoise};
  padding-top: 24px;
`;
