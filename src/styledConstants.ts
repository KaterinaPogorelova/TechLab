import styled from "styled-components";
import { hoverBtnColor, typographyColor } from "./styledConstantsColors";

export const StyledFlex = styled.div` // это можно дополнять условиями
  display: flex;
`

export const StyledFrameHeader = styled.h3` // Заголовок почти на каждом блоке 
color: ${typographyColor.lightBG.black};
font-family: Raleway;
font-size: 54px;
font-style: normal;
font-weight: 700;
line-height: 60px;
letter-spacing: 1.62px; 
margin-bottom: 16px;

& span{ // фиолетовое выделенное слово в заголовке
  padding: 8px 20px;
  border-radius: 100px;
background: ${typographyColor.lightBG.violet};
color: ${typographyColor.darkBG.white};
}
`

export const StyledFrameText = styled.p<{ $black: boolean }>` // текст под заголовком почти в каждом блоке
  font-family: Raleway;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 40px;
margin-bottom: 50px;
color: ${props => props.$black ? typographyColor.lightBG.black : typographyColor.darkBG.white};

& a { // ссылка в тексте
color: ${typographyColor.lightBG.violet};
  &:hover {
    color: ${hoverBtnColor.violet};
  }
}
`
export const StyledContainer = styled.div`
  max-width: 1224px;
  margin: 0 auto;

  @media(max-width:1440px){
    max-width:1000px;
    padding:0 20px;
  }
`;