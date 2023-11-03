import styled from "styled-components";

export const colors = {
  violet: "#8657DD",
  black: "#111111",
  darkGray: "#999999",
  green: "#65DC6A",
  white: "#FFFFFF",
  gradientG3: "linear-gradient(90deg, #65DC6A 0%, #7293A9 52.09%, #8047EB 106.81%)"
};

export const backgroundColors = { // девочки-дизайнеры просили разделить цвета текста и фона
  black: "#111111",
  violet20: "rgba(134, 87, 221, 0.20)",
  violet5: "rgba(128,71,235,0.05)",
  champagne: "#FAF9F2",
  white: "#FFFFFF",
  violet: "#8657DD",
}

export const StyledFlex = styled.div` // это можно дополнять условиями
  display: flex;
`
export const StyledContent = styled.div` // Обертка для контента на странице 
  max-width: 1226px;
  margin: 0 auto;
`;

export const StyledFrameHeader = styled.h3` // Заголовок почти на каждом блоке 
color: ${colors.black};
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
background: ${backgroundColors.violet};
color: ${colors.white};
}
`

export const StyledFrameText = styled.p<{$black: boolean}>` // текст под заголовком почти в каждом блоке
  font-family: Raleway;
font-size: 32px;
font-style: normal;
font-weight: 400;
line-height: 40px;
margin-bottom: 50px;
color: ${props => props.$black ? colors.black : colors.white};

& a { // ссылка в тексте
  color: ${colors.violet};
}
`