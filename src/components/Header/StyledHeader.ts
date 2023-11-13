import styled from "styled-components";

import { StyledContainer } from "../../styledConstants";

import { Link } from "react-router-dom";
import { backgroundColor, defaultBtnColor, hoverBtnColor } from "../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFont";

export const StyledHeaderWrap = styled.header<{ $isRunlineClosed: boolean }>`
position:fixed;
top:${props => props.$isRunlineClosed ? '0' : '50px'};;
left:0;
width:100%;
background: ${backgroundColor.black};
z-index:4;
`

export const StyledContainerHeader = styled(StyledContainer)`
margin: 0 auto;
display:flex;
justify-content:space-between;
align-items:center;
`

export const StyledLogoWrap = styled(Link)`
display:flex;
align-items:center;
gap:8px;

& svg{
    fill:${defaultBtnColor.green};
}
&:hover svg{
    fill:${hoverBtnColor.yellow};
    transition:all 0.5s;
}

&:hover h3{
    color:${hoverBtnColor.yellow};
    transition:all 0.5s;
}
`

export const StyledName = styled.h3`
margin:0;
font-size:20px;
font-weight:${Desktop1920.headings.h6.weight};
color:${defaultBtnColor.green};
@media(max-width:1440px){
font-size:18px;
font-weight:${Desktop1440.headings.h6.weight};
}
`