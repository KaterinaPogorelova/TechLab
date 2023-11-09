import styled from "styled-components";
import { colors, hoverBtnColor, typographyColor } from "../../../../styledConstantsColors";
import { NavLink } from "react-router-dom";

export const StyledPopularCardHeader = styled.p`
  max-width: 428px;
  height: 50px;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
`;
export const StyledPopularTags = styled.div<{
  $vertical?: boolean;
  $type?: "Design" | "Data Science" | "Programming";
}>`
  height: ${(props) => (props.$vertical ? "110px" : "auto")};
  width: ${(props) => (props.$vertical ? "167px" : "auto")};
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
`;
export const StyledPopularCardDescription = styled.p<{ $vertical?: boolean }>`
  width: 428px;
  height: ${(props) => (props.$vertical ? "160px" : "auto")};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.32px;
  margin-top: ${(props) => (props.$vertical ? "134px" : "0px")};
  margin-bottom: 0px;
`;

export const StyledPopularCardImage = styled.img<{ $vertical?: boolean }>`
  max-width: 200px;
  position: absolute;
  top: ${(props) => (props.$vertical ? "76px" : "0")};
  right: 0;
  margin-bottom: 33px;
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
`