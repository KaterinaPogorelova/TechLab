import styled from "styled-components";
import { backgroundColor, typographyColor } from "../../styledConstantsColors";


export const StyledAccordeon = styled.ul`
  width: 793px; 
  min-height: 560px;
  margin: 0 auto;
  background-color: transparent;
`;
export const StyledAccordeonPanel = styled.div<{ $isOpen: boolean, $blackAcc?: boolean }>`
  width: 100%;
  position: relative;
  cursor: pointer;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  color: ${props => props.$blackAcc ? typographyColor.lightBG.black : typographyColor.darkBG.white};
  border-bottom: ${props => (props.$isOpen ? "none" : `1px solid ${props.$blackAcc ? typographyColor.lightBG.darkGray : typographyColor.darkBG.white}`)};

  & div {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & button {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
  }

  & img {
    width: 40px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    transform: rotate(${(props) => (props.$isOpen ? "-45deg" : "0deg")});
  }
`;
export const StyledAccordeonContent = styled.li<{ $isOpen?: boolean, $blackAcc?: boolean }>`
  padding: 20px 30px;
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: ${props => props.$blackAcc ? typographyColor.lightBG.black : typographyColor.darkBG.white};
`;

export const StyledAccordeonCollapse = styled.div<{ $isOpen?: boolean, $blackAcc?: boolean }>`
  height: ${(props) => (props.$isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.5s;
  background-color: ${props => props.$blackAcc ? backgroundColor.violet5 : backgroundColor.violet20};
  border-radius: 16px;
`;
