import styled from "styled-components";
import { backgroundColor, colors, typographyColor } from "../../styledConstantsColors";
import { StyledContainer } from "../../styledConstants";
import { Link } from "react-router-dom";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

export const StyledAdWrap = styled.div`
background:${backgroundColor.yellow};
@media(max-width:767.5px){
    padding-top:50px;
}
@media(max-width:479.5px){
    padding-bottom:88px;
}
`

export const StyledAdContainer = styled(StyledContainer)`
display:flex;
align-items:center;
@media(max-width:767.5px){
    flex-direction:column;
}
`

export const StyledAdInfoWrap = styled.div`
width:calc(100% - 621px);

& p{
    margin-bottom:20px;
}
@media(max-width:1439.5px){
    width:calc(100% - 453px);
    & p{
        margin-bottom:40px;
    }
}
@media(max-width:1023.5px){
    width:calc(100% - 383px);
    & h3{
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 0.96px;
        margin-bottom:10px;
    }
    & p{
        margin-bottom:24px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.48px;
    }
}
@media(max-width:767.5px){
    width:100%;
    & h3{
        font-weight: 800;
        line-height: 34px;
    }
    & p{
        font-size: 20px;
        font-weight: 300;
        line-height: 26px;
        margin-bottom:34px;
    }
}
@media(max-width:479.5px){
    & p{
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
    }
}
`

export const StyledImgWrap = styled.div`
overflow:hidden;
width:621px;
height:500px;
& img{
    height:100%;
}

@media(max-width:1439.5px){
    height:365px;
    width:453px;
}
@media(max-width:1023.5px){
    height:295px;
    width:383px;
}
@media(max-width:479.5px){
    display:none;
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

@media(max-width:1439.5px){
    padding:14px 32px;
    font-size:${Desktop1440.buttons.buttonLg.size};
}
@media(max-width:1023.5px){
    padding:10px 24px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
}
@media(max-width:767.5px){
    padding:16px 30px;
    font-size: 22px;
    line-height: 24px;
}
@media(max-width:479.5px){
    display:block;
    text-align:center;
    width:100%;
}
`