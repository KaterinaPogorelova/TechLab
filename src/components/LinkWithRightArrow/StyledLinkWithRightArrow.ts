import { Link } from "react-router-dom";

import styled from "styled-components";
import { colors, hoverBtnColor } from "../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

export const StyledArrowWrap = styled(Link) <{ $isBlack?: boolean, $isRightSided?: boolean }>`
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
    fill:${props => props.$isBlack ? colors.neutral.darkBlack : colors.neutral.white};
    width:49px;
    height:48px;
    transition:all 0.5s;
}
&:hover svg{
    fill:${hoverBtnColor.yellow};
}
@media(max-width:1440px){
    & svg{
    width:37px;
    height:36px;
    }
}
`

export const StyledArrowText = styled.p`
font-size:${Desktop1920.links.bodyLink.size};
font-weight:${Desktop1920.links.bodyLink.weight};
letter-spacing:${Desktop1920.links.bodyLink.letterSpacing};

@media(max-width:1440px){
font-size:${Desktop1440.links.bodyLink.size};
font-weight:${Desktop1440.links.bodyLink.weight};
letter-spacing:${Desktop1440.links.bodyLink.letterSpacing};
}
`