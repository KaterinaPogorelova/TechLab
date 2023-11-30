import styled from "styled-components";
import { backgroundColor, colors, typographyColor } from "../../styledConstantsColors";
import { StyledContainer } from "../../styledConstants";
import { Link } from "react-router-dom";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

export const StyledAdWrap = styled.div`
background:${backgroundColor.yellow};
`

export const StyledAdContainer = styled(StyledContainer)`
display:flex;
align-items:center;
`

export const StyledAdInfoWrap = styled.div`
width:calc(100% - 621px);

& p{
    margin-bottom:20px;
}
@media(max-width:1440px){
    width:calc(100% - 453px);
}
`

export const StyledImgWrap = styled.div`
overflow:hidden;
width:621px;
height:500px;
& img{
    height:100%;
}

@media(max-width:1440px){
    height:365px;
    width:453px;
}
`

export const StyledAdButton = styled(Link)`
width: fit-content;
border-radius: 100px;
padding:16px 44px;
border: 1px solid ${colors.neutral.darkBlack};
color:${typographyColor.lightBG.black};
font-size:${Desktop1920.buttons.buttonLg.size};
font-weight:${Desktop1920.buttons.buttonLg.weight};
transition: 0.5s background-color;
position: relative;
overflow: hidden;
z-index: 1;

&:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:${backgroundColor.yellow};
    z-index: -2;
}

&:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: ${backgroundColor.black};
    transition: all .3s;
    border-radius: 10rem;
    z-index: -1;
}

&:hover{
color:${typographyColor.darkBG.white};
&:before {
    width: 100%;
}
}

@media(max-width:1440px){
    padding:14px 32px;
    font-size:${Desktop1440.buttons.buttonLg.size};
}
`