import styled from "styled-components";
import { hoverBtnColor, typographyColor } from "./styledConstantsColors";

export const StyledFlex = styled.div`
  // это можно дополнять условиями
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const StyledFrameHeader = styled.h3` // Заголовок почти на каждом блоке 
color: ${typographyColor.lightBG.black};
font-family: Raleway;
font-size: 56px;
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

@media(max-width:1439.5px){
font-size: 36px;
font-weight: 700;
line-height: 45px;
letter-spacing: 1.08px;
}
@media(max-width:767.5px){
font-size: 30px;
font-weight: 700;
line-height: 32px;
letter-spacing: 1.08px;
margin-bottom: 11px;
& span{ 
  padding: 2px 7px;
}
}
`

export const StyledFrameText = styled.p<{ $black: boolean }>`
  // текст под заголовком почти в каждом блоке
  font-family: Raleway;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 50px;
  color: ${(props) =>
    props.$black
      ? typographyColor.lightBG.black
      : typographyColor.darkBG.white};

  & a {
    // ссылка в тексте
    color: ${typographyColor.lightBG.violet};
    &:hover {
      color: ${hoverBtnColor.violet};
    }
  }
  & span{
    font-weight: 700;
  }
@media(max-width:1439.5px){
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 40px;
}
@media(max-width:1023.5px){
  margin-bottom: 14px;
}
@media(max-width:767.5px){
  margin-bottom: 10px;
}
@media(max-width:479.5px){
  margin-bottom: 20px;
  }
`;

export const StyledContainer = styled.div`
  position: relative;
  max-width: 1224px;
  margin: 0 auto;

  @media (max-width: 1439.5px) {
    max-width: 980px;
    padding: 0 20px;
  }
`;

export const StyledSectionSeparator = styled.div<{ $background: string }>` 
//Некоторые фреймы имеют закруглённые концы, этот блок существует, чтобы исключить белые пробелы между фреймами

position:absolute;
transform:translateY(-80px);
height:80px;
width:100%;
z-index:-1;
background:${props => props.$background};
`
