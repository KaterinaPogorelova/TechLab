import styled from "styled-components";
import { colors, defaultBtnColor, gradient, typographyColor, typographyGradient } from "../../styledConstantsColors";
import { StyledContainer } from "../../styledConstants";
import { Link } from "react-router-dom";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";
import leftline from '../../assets/img/testleftline.svg'
import rightline from '../../assets/img/testrightline.svg'

export const StyledTestBlock = styled.div`
position:relative;
background:${gradient.violetDark};
padding:13px 0 89px;
overflow:hidden;

&:before{
    content:'';
    position:absolute;
    background:url(${leftline});
    background-repeat:no-repeat;
    bottom:0;
    left:0;
    width:50%;
    height:65%;
}

&:after{
    content:'';
    position:absolute;
    background:url(${rightline});
    background-repeat:no-repeat;
    bottom:0px;
    right:0;
    width:10%;
    height:80%;
}

@media(max-width:1440px){
    padding:0 0 28px;

    &:before{
    bottom: 10px;
    left: -84px;
    height: 100%;
    }
    &:after{
        width: 15%;
    height: 70%;
    }
}
`

export const StyledTestContainer = styled(StyledContainer)`
position:relative;
display:flex;
gap:64px;
z-index:1;
@media(max-width:1440px){
    gap:21px;
}
`

export const StyledImgWrap = styled.div`
width:562px;
height:594px;

& img{
    width:100%;
    height:100%;
}
@media(max-width:1440px){
    width:460px;
    height:490px;
}
`

export const StyledTestInfoWrap = styled.div`
padding-top:200px;
width:600px;
@media(max-width:1440px){
    padding-top:142px;
    width:460px;
}
`

export const StyledTestBlockTitle = styled.h1`
font-size: 72px;
font-weight: 800;
line-height: 80px;
background: ${typographyGradient.G1};
-webkit-background-clip: text;
color: transparent;
margin-bottom:8px;

@media(max-width:1440px){
    font-size: 56px;
    line-height: 60px;
    margin-bottom:20px;
}
`

export const StyledTestBlockSubtitle = styled.p`
color:${typographyColor.darkBG.white};
font-size: 40px;
font-weight: 600;
line-height: 50px;
letter-spacing: 1.6px;
margin-bottom:20px;

@media(max-width:1440px){
    font-size: 26px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 1.04px;
}
`

export const StyledYellowBtn = styled(Link)`
width:282px;
padding:16px 44px;
border-radius: 100px;
font-size:${Desktop1920.buttons.buttonLg.size};
font-weight:${Desktop1920.buttons.buttonLg.weight};
line-height:${Desktop1920.buttons.buttonLg.lineHeight};
background-color: ${defaultBtnColor.yellow};
transition: all .3s;

&:hover {
    color: ${typographyColor.darkBG.yellow};
    background:none;
    border:1px solid ${colors.brand.yellow};
}

@media(max-width:1440px){
    width:208px;
    font-size:${Desktop1440.buttons.buttonLg.size};
    font-weight:${Desktop1440.buttons.buttonLg.weight};
    line-height:${Desktop1440.buttons.buttonLg.lineHeight};
    padding:14px 32px;
}
`