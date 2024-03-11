import styled from "styled-components";

import { StyledContainer } from "../../styledConstants";

import { Link } from "react-router-dom";
import { backgroundColor, defaultBtnColor, hoverBtnColor } from "../../styledConstantsColors";

export const StyledHeaderWrap = styled.header<{ $isRunlineClosed: boolean }>`
position:fixed;
top:${props => props.$isRunlineClosed ? '0' : '50px'};
left:0;
width:100%;
background: ${backgroundColor.black};
z-index:4;
@media(max-width:1439.5px){
    top:${props => props.$isRunlineClosed ? '0' : '34px'};
}
`

export const StyledContainerHeader = styled(StyledContainer)`
position:static;
margin: 0 auto;
display:flex;
justify-content:space-between;
align-items:center;
`
export const StyledHeadIconsWrap = styled.div`
display:flex;
`

export const StyledLogoWrap = styled(Link)`
display:flex;
align-items:center;
gap:8px;

& svg{
    fill:${defaultBtnColor.green};
    width: 32px;
    height: 32px;
}
&:hover svg{
    fill:${hoverBtnColor.yellow};
    transition:all 0.5s;
}

&:hover h3{
    color:${hoverBtnColor.yellow};
    transition:all 0.5s;
}

@media(max-width:1439.5px){
    & svg{
        width: 23px;
        height: 23px;
    }
}
@media(max-width:1023.5px){
    & svg{
        width: 30px;
        height: 30px;
    }
}

@media(max-width:767.5px){
    & svg{
        width: 23px;
        height: 23px;
    }
}
@media(max-width:479.5px){
    & svg{
        width: 31px;
        height: 31px;
    }
}
`

export const StyledBurgerWrap = styled.div`
display:none;
width:32px;
height:32px;
margin:20px 16px 20px 0px;
& svg{
    width:100%;
    height:100%;
    fill:${defaultBtnColor.green};
}
@media(max-width:1023.5px){
    display:block;
}
@media(max-width:767.5px){
    width:33px;
height:24px;
    margin:16px 26px 16px 0px;
}
@media(max-width:479.5px){
    margin: 16px 50px 16px 0px;
}
`

export const StyledName = styled.h3`
margin:0;
font-size:20px;
font-weight:600;
color:${defaultBtnColor.green};

@media(max-width:1439.5px){
font-size:16px;
font-weight:600;
}

@media(max-width:1023.5px){
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
}

@media(max-width:767.5px){
    font-size:16px;
    }
`