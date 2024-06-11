import styled from "styled-components";
import { colors } from "../../../styledConstantsColors";

export const StyledStudentWorkplace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.neutral.white};
  padding: 120px 0;
  height: 392px;
  & > div {
    width: 100%;
  }
`;
export const StyledStudentWorkplaceTitle = styled.span`
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;

export const StyledBrandsLine = styled.div``;

export const StyledMarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  height: 62px;
  margin-top: 50px;
`;

export const StyledMarqueeInner = styled.div<{ speed: number }>`
  display: inline-block;
  white-space: nowrap;
  animation: scroll ${(props) => props.speed}s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const StyledImageWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
  gap: 80px;
  img {
    height: 62px;
    margin-right: 80px;
  }
`;
