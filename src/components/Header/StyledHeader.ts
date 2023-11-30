import styled from "styled-components";

import { StyledContainer } from "../../styledConstants";

import { Link } from "react-router-dom";
import { backgroundColor, defaultBtnColor, hoverBtnColor } from "../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

export const StyledHeaderWrap = styled.header<{ $isRunlineClosed: boolean }>`
position:fixed;
top:${props => props.$isRunlineClosed ? '0' : '50px'};
left:0;
width:100%;
background: ${backgroundColor.black};
z-index:4;

@media(max-width:1023px){
    top:${props => props.$isRunlineClosed ? '0' : '42px'};
}
@media(max-width:767px){
    top:${props => props.$isRunlineClosed ? '0' : '34px'};
}
`

export const StyledContainerHeader = styled(StyledContainer)`
margin: 0 auto;
display:flex;
justify-content:space-between;
align-items:center;
 
@media(max-width:1023px){
    padding:0 32px;
  }
  @media(max-width:767px){
    padding:0 20px;
  }
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

@media(max-width:1440px){
    & svg{
        width: 23px;
        height: 23px;
    }
}
@media(max-width:1024px){
    & svg{
        width: 32px;
        height: 32px;
    }
}

@media(max-width:767px){
    & svg{
        width: 24px;
        height: 24px;
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
@media(max-width:1024px){
    display:block;
}
@media(max-width:767px){
    width:33px;
height:24px;
    margin:12px 43px 12px 0px;
}
@media(max-width:479px){
    margin: 15px 50px 15px 0px;
}
`

export const StyledName = styled.h3`
margin:0;
font-size:20px;
font-weight:${Desktop1920.headings.h6.weight};
color:${defaultBtnColor.green};

@media(max-width:1440px){
font-size:16px;
font-weight:${Desktop1440.headings.h6.weight};
}

@media(max-width:1024px){
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
}

@media(max-width:767px){
    font-size:16px;
    }
`