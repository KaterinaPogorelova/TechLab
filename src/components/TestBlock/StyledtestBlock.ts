import styled from "styled-components";
import { colors, defaultBtnColor, gradient, typographyColor, typographyGradient } from "../../styledConstantsColors";
import { StyledContainer } from "../../styledConstants";
import { Link } from "react-router-dom";
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

@media(max-width:1439.5px){
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
@media(max-width:767.5px){
    &:before{
        display:none;
    }
    &:after{
        display:none;
    }
}
@media(max-width:479.5px){
    padding:50px 0 70px;
}
`

export const StyledTestContainer = styled(StyledContainer)`
position:relative;
display:flex;
gap:64px;
z-index:1;
@media(max-width:1439.5px){
    justify-content:center;
    gap:21px;
}
@media(max-width:1023.5px){
    gap:55px;
}
@media(max-width:767.5px){
    flex-direction:column;
    align-items:center;
    gap:0px;
}
`

export const StyledImgWrap = styled.div`
width:562px;
height:594px;

& img{
    width:100%;
    height:100%;
}
@media(max-width:1439.5px){
    width:460px;
    height:490px;
}
@media(max-width:1023.5px){
    width:190px;
    height:220px;
}
@media(max-width:767.5px){
    width:275px;
    height:305px;
    margin-bottom:20px;
}
`

export const StyledTestInfoWrap = styled.div`
padding-top:200px;
width:600px;
@media(max-width:1439.5px){
    padding-top:142px;
    width:460px;
}
@media(max-width:1023.5px){
    padding-top:40px;
    width:254px;
}
@media(max-width:767.5px){
    padding-top:0px;
    width:288px;
}
@media(max-width:479.5px){
    width:100%;
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

@media(max-width:1439.5px){
    font-size: 56px;
    line-height: 60px;
    margin-bottom:20px;
}
@media(max-width:1023.5px){
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.96px;
    margin-bottom:8px;
}
@media(max-width:767.5px){
    font-size: 42px;
    font-weight: 800;
    line-height: 44px;
    letter-spacing: 1.26px;
}
@media(max-width:479.5px){
    font-size: 32px;
    line-height: 34px;
    letter-spacing: 0.96px;
}
`

export const StyledTestBlockSubtitle = styled.p`
color:${typographyColor.darkBG.white};
font-size: 40px;
font-weight: 600;
line-height: 50px;
letter-spacing: 1.6px;
margin-bottom:20px;

@media(max-width:1439.5px){
    font-size: 26px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 1.04px;
}
@media(max-width:1023.5px){
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.48px;
    margin-bottom:30px;
}
@media(max-width:767.5px){
    font-size: 26px;
    font-weight: 700;
    line-height: 28px; 
}
@media(max-width:479.5px){
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom:20px;
}
`

export const StyledYellowBtn = styled(Link)`
padding:16px 44px;
border-radius: 100px;
font-size:32px;
font-weight:500;
line-height:40px;
background-color: ${defaultBtnColor.yellow};
transition: all .3s;

&:hover {
    color: ${typographyColor.darkBG.yellow};
    background:none;
    border:1px solid ${colors.brand.yellow};
}

@media(max-width:1439.5px){
    font-size:24px;
    line-height:32px;
    padding:14px 32px;
}
@media(max-width:1023.5px){
    padding:10px 24px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
}
@media(max-width:767.5px){
    display:block;
    margin:0 auto;
    width:195px;
    padding:16px 30px;
    font-size: 22px;
    line-height: 24px;
}
@media(max-width:479.5px){
    width:100%;
    text-align:center;
}
`