import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors, hoverBtnColor } from "../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

export const StyledArrowWrap = styled(Link) <{ $isBlack?: boolean, $isRightSided?: boolean, $mobileNotChanged?: boolean }>`
display:flex;
gap:10px;
align-items:center;
width: fit-content;
margin-left:${props => props.$isRightSided ? 'auto' : '0'};
position:relative;
z-index:1;

& p{
    color:${props => props.$isBlack ? colors.neutral.darkBlack : colors.neutral.white};
    transition:all 0.5s;
}
&:hover p{
    color:${hoverBtnColor.yellow};
}
& svg{
    fill:${props => props.$isBlack ? colors.neutral.darkBlack + '!important' : colors.neutral.white};
    width:49px;
    height:48px;
    transition:all 0.5s;
}
&:hover svg{
    fill:${hoverBtnColor.yellow + '!important'};
}
@media(max-width:1439.5px){
    & svg{
    width:37px;
    height:36px;
    }
}
@media(max-width:1023.5px){
    gap:8px;
    & svg{
        width:20px;
        height:20px;
        transform:${props => props.$mobileNotChanged ? 'rotate(0deg)' : 'rotate(-90deg)'};
    }
}
@media(max-width:767.5px){
    margin: ${props => props.$mobileNotChanged ? 'auto 0 0' : '0 0 0 auto'};
    & svg{
        width:${props => props.$mobileNotChanged ? '40px' : '20px'};
        height:${props => props.$mobileNotChanged ? '40px' : '20px'};
    }
}
@media(max-width:479.5px){
    & svg{
        width:${props => props.$mobileNotChanged ? '48px' : '20px'};
        height:${props => props.$mobileNotChanged ? '48px' : '20px'};
    }
}
}
`

export const StyledArrowText = styled.p`
font-size:${Desktop1920.links.bodyLink.size};
font-weight:${Desktop1920.links.bodyLink.weight};
letter-spacing:${Desktop1920.links.bodyLink.letterSpacing};

@media(max-width:1439.5px){
font-size:${Desktop1440.links.bodyLink.size};
font-weight:${Desktop1440.links.bodyLink.weight};
letter-spacing:${Desktop1440.links.bodyLink.letterSpacing};
}
@media(max-width:1023.5px){
    font-weight:500;
}
@media(max-width:479.5px){
    font-size: 18px;
font-weight: 600;
}
`