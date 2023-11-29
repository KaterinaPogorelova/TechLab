import styled from "styled-components";
import { backgroundColor, colors, defaultBtnColor, hoverBtnColor, typographyColor } from "../../../styledConstantsColors";
import { Link } from "react-router-dom";
import { Desktop1440, Desktop1920 } from "../../../styledConstantsFonts";

export const StyledUserModalWrap = styled.div<{ $isOpened: boolean }>`
position:absolute;
width:408px;
top:0;
visibility:${props => props.$isOpened ? 'visible' : 'hidden'};
right:0;
background:${backgroundColor.lightBlack};
transform:${props => props.$isOpened ? 'translateY(59px)' : 'translateY(0px)'};
opacity:${props => props.$isOpened ? '1' : '0'};
transition: all 0.5s;
padding:40px;
border-radius:0 0 20px 20px;

@media(max-width:1440px){
    width:300px;
    padding:30px;
    transform:${props => props.$isOpened ? 'translateY(49px)' : 'translateY(0px)'};
}

@media(max-width:1023px){
    transform:${props => props.$isOpened ? 'translateY(52px)' : 'translateY(0px)'};
}
@media(max-width:767px){
    transform:${props => props.$isOpened ? 'translateY(39px)' : 'translateY(0px)'};
}
`

export const StyledLogLink = styled(Link)`
display:block;
text-align:center;
width:100%;
background:${defaultBtnColor.green};
color:${typographyColor.lightBG.black};
padding:8px 24px;
border-radius: 100px;
font-size:${Desktop1920.buttons.buttonSm.size};
font-weight:${Desktop1920.buttons.buttonSm.weight};
lineHeight:${Desktop1920.buttons.buttonSm.lineHeight};
letter-spacing:${Desktop1920.buttons.buttonSm.letterSpacing};
transition:all 0.5s;
margin-bottom:30px;
&:hover{
    color:${typographyColor.darkBG.white};
    background:${hoverBtnColor.green};
}
@media(max-width:1440px){
    font-size:${Desktop1440.buttons.buttonSm.size};
font-weight:${Desktop1440.buttons.buttonSm.weight};
lineHeight:${Desktop1440.buttons.buttonSm.lineHeight};
letter-spacing:${Desktop1440.buttons.buttonSm.letterSpacing};
}
`

export const StyledSignText = styled.p`
font-size:${Desktop1920.links.submenu.size};
font-weight:${Desktop1920.links.submenu.weight};
letter-spacing:${Desktop1920.links.submenu.letterSpacing};
line-height:${Desktop1920.links.submenu.lineHeight};
color:${colors.neutral.white};
text-align:center;

& a{
    margin-left:20px;
    font-weight:700;
    transition:all 0.5s;
}
& a:hover{
    color:${hoverBtnColor.darkGray}
}
@media(max-width:1440px){
    font-size: 14px;
    letter-spacing: 0.28px;
}
`