import styled from "styled-components";
import { } from "../../../styledConstants";

import { Link } from "react-router-dom";
import { activeBtnColor, colors, defaultBtnColor, hoverBtnColor } from "../../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../../styledConstantsFont";

export const StyledNav = styled.ul`
display:flex;
margin:0;
`

export const StyledLinkWrap = styled.li`
display:flex;
gap:8px;
cursor:pointer;
padding:27px 32px;

&:hover a{
    color:${hoverBtnColor.green};
    transition:all 0.5s;
}

&:hover svg{
    fill:${hoverBtnColor.green};
    transition:all 0.5s;
}

&:hover div{
    color:${hoverBtnColor.green};
    transition:all 0.5s;
}
`

export const StyledSvgWrap = styled.div<{ $isClicked?: boolean }>`
transform:${props => props.$isClicked ? 'rotate(180deg)' : 'rotate(0deg)'};
    width:24px;
    height:24px;
& svg{
    fill: ${props => props.$isClicked ? activeBtnColor.green : colors.neutral.white}
}
`

export const StyledLinkContainer = styled.div<{ $clickedTab: string, $title: string }>`
font-size: ${Desktop1920.buttons.buttonSm.size};
font-weight: ${Desktop1920.buttons.buttonSm.weight};
color:${props => props.$clickedTab === props.$title ? activeBtnColor.green : defaultBtnColor.white};
@media(max-width:1440px){
    font-size: ${Desktop1440.buttons.buttonSm.size};
    font-weight: ${Desktop1440.buttons.buttonSm.weight};
}
`

export const StyledLinkMain = styled(Link)`
color:${defaultBtnColor.white};
font-size: ${Desktop1920.buttons.buttonSm.size};
font-weight: ${Desktop1920.buttons.buttonSm.weight};
@media(max-width:1440px){
    font-size: ${Desktop1440.buttons.buttonSm.size};
    font-weight: ${Desktop1440.buttons.buttonSm.weight};
}
`