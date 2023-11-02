import styled from "styled-components";
import { colors } from "../../styledConstants";

export const StyledAccordeon = styled.ul`
  max-width: 793px;
  margin: 0 auto;
  background-color: transparent;
`;
export const StyledAccordeonPanel = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  position: relative;
  cursor: pointer;
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  color: ${colors.black}; //белые буквы на черном блоке

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
export const StyledAccordeonContent = styled.li<{ $isOpen?: boolean }>`
  padding: 20px 30px;
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  color: ${colors.black}; //белые буквы на черном блоке
`;

export const StyledAccordeonCollapse = styled.div<{ $isOpen?: boolean }>`
  height: ${(props) => (props.$isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.5s;
  background-color: rgba(
    128,
    71,
    235,
    0.05
  ); //это на светлом блоке, надо потом прописать условием для темного блока вместо 0,05 на 0,2
  border-radius: 16px;
`;
