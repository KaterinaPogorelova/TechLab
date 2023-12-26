import styled from "styled-components";
import { colors, gradient, hoverBtnColor, typographyColor, typographyGradient } from "../../styledConstantsColors";
import { StyledContainer } from "../../styledConstants";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";
import { Link } from "react-router-dom";
import lineLeft from '../../assets/img/lineLeft.png'
import lineRight from '../../assets/img/lineRight.png'

export const StyledMainInfoWrap = styled.main<{ $isClosedRunline: boolean }>`
position:relative;
padding:${props => props.$isClosedRunline ? '188px 0 100px' : '238px 0 100px'};
background:${gradient.violetDark};
border-radius:0px 0px 80px 80px;
overflow:hidden;

&::before{
    content:'';
    position:absolute;
    background:url(${lineLeft});
    background-repeat:no-repeat;
    top:78px;
    left:0;
    width:50%;
    height:100%;

@media(max-width:1439.5px){
    width:43%;
}
@media(max-width:1023.5px){
    display:none;
}
}

&::after{
    content:'';
    position:absolute;
    transform:rotate(360deg);
    background:url(${lineRight});
    background-repeat:no-repeat;
    top:78px;
    right:0;
    width:50%;
    height:100%;

@media(max-width:1439.5px){
    width:57%;
}
@media(max-width:767.5px){
    width:100%;
}
}
@media(max-width:1024px){
    padding:${props => props.$isClosedRunline ? '132px 0 89px' : '174px 0 89px'};
    border-radius:0px 0px 0px 0px;
}
@media(max-width:767.5px){
    padding:${props => props.$isClosedRunline ? '104px 0 52px' : '146px 0 52px'};
}
@media(max-width:479.5px){
    padding:${props => props.$isClosedRunline ? '124px 0 67px' : '158px 0 67px'};
}
`

export const StyledMainContainer = styled(StyledContainer)`
display:flex;
justify-content:space-between;
`

export const StyledInfoWrap = styled.div`
position:relative;
z-index:2;
max-width:665px;
@media(max-width:1439.5px){
    max-width:510px;
}
@media(max-width:1023.5px){
    max-width:432px;
}
@media(max-width:767.5px){
    max-width:100%;
    width:100%;
}
`

export const StyledTitle = styled.h1`
width:433px;
font-size: 72px;
font-weight: 800;
margin-bottom:20px;
background:${typographyGradient.G1};
background-clip: text;
text-fill-color:transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@media(max-width:1439.5px){
    font-size:56px;
    width:337px;
}
@media(max-width:1023.5px){
    width:344px;
}
@media(max-width:767.5px){
    font-size: 42px;
    line-height: 44px;
    letter-spacing: 1.26px;
    width: 275px;
    padding:21px 0;
    margin-bottom:208px;
}
@media(max-width:479.5px){
    font-size: 32px;
    line-height: 34px;
    padding:0;
    letter-spacing: 0.96px;
    margin-bottom:113px;
}
`
export const StyledTextWrap = styled.div`
position:relative;
margin-bottom:140px;
width:410px;
@media(max-width:1439.5px){
    width:260px;
    margin-bottom:70px;
}
@media(max-width:1023.5px){
    margin-bottom:47px; 
}
`

export const StyledText = styled.p`
color:${typographyColor.darkBG.white};
font-size: ${Desktop1920.bodyText.body1.size};
font-weight: ${Desktop1920.bodyText.body1.weight};

@media(max-width:1439.5px){
    font-size: ${Desktop1440.bodyText.body1.size};
}
@media(max-width:1023.5px){
    font-size: 24px;
    line-height: 32px;
}
`

export const StyledSvgWrap = styled.div`
position:absolute;
top:8px;
right:0;
width:133px;
height:134px;
overflow: hidden;

& svg{
    width:100%;
    height:100%;
}

@media(max-width:1439.5px){
    width:92px;
    height:70px;
}
@media(max-width:1023.5px){
    top:13px;
    right:-65px;
    width:75px;
    height:50px;

    & svg{
        position:relative;
        width:44px;
        height:114px;
        bottom:33px;
        right:0px;
    }
}
`

export const StyledCoursesList = styled.ul`
display:flex;
flex-wrap:wrap;
gap:12px;
margin-bottom:43px;
@media(max-width:1023.5px){
    gap:20px 8px;
    margin-bottom:32px;
}
@media(max-width:767.5px){
    gap:8px 6px;
    width:446px;
}
@media(max-width:479.5px){
    gap:6px;
    width:100%;
}
`

export const StyledCoursesItemWrap = styled.li <{ $color: string }>`
border-radius:40px;
margin-bottom:12px;
@media(max-width:1023.5px){
    margin-bottom:0px;
}
@media(max-width:767.5px){
    order:2;
    &:last-of-type{
        order:1;
        width:100%;
        & a{
            width:95px;
        }
    }
}
@media(max-width:479.5px){
    &:last-of-type{
        & a{
            width:76px;
        }
    }
}
`

export const StyledCoursesItem = styled(Link) <{ $color: string }>`
border:${props => {
        if (props.$color === 'violet') return ('1px solid' + colors.brand.violet)
        if (props.$color === 'green') return ('1px solid' + colors.brand.green)
        if (props.$color === 'orange') return ('1px solid' + colors.brand.orange)
        if (props.$color === 'gradient') return ('1px solid' + colors.brand.green)
    }};
display:block;

background:${props => props.$color === 'gradient' ? gradient.gradient20 : 'none'};
border-radius:40px;
width:100%;
height:100%;
padding:6px 20px;
border-radius:40px;
color:${colors.neutral.white};
font-size:${Desktop1920.badges.info.size};
font-weight:${Desktop1920.badges.info.weight};
transition:all 0.5s;

&:hover{
    background:${props => {
        if (props.$color === 'violet') return hoverBtnColor.violet20
        if (props.$color === 'green') return hoverBtnColor.green20
        if (props.$color === 'orange') return hoverBtnColor.orange20
        if (props.$color === 'gradient') return gradient.gradient50
    }}
}
@media(max-width:1439.5px){
    font-size:${Desktop1440.badges.info.size};
}
@media(max-width:1023.5px){
    padding:7px 10px;
    font-size: 16px;
}
@media(max-width:767.5px){
    padding:8px 12px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.54px;
}
@media(max-width:479.5px){
    padding:6px 10px;
    font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.42px;
}
`

export const StyledExpertsWrap = styled.div`
position:relative;
display:flex;
align-items:center;
gap:25px;
@media(max-width:1439.5px){
    gap:8px;
}
`

export const StyledExpertsText = styled.p`
font-size: 28px;
font-weight: 600;
color:${typographyColor.darkBG.white};

@media(max-width:1439.5px){
    font-size: 18px;
    font-weight: 400;
}
@media(max-width:1023.5px){
    font-weight: 500;
    margin-right:20px;
}
@media(max-width:767.5px){
    font-size: 14px;
    margin-right:7px;
}
`

export const StyledExpertsList = styled.ul`
display:flex;

& li{
    margin:0 -7px;
    transition:all 0.5s;
}

&:hover li{
margin:0 5px;
}
@media(max-width:767.5px){
    margin:0 -4px;
    &:hover li{
        margin:0;
        }
}
`

export const StyledExpertsItem = styled.li<{ $color: string }>`
display:flex;
align-items:end;
width:55px;
height:55px;
justify-content:center;
background:${props => props.$color};
border-radius:50%;
border:2px solid ${colors.neutral.mediumGray};
overflow:hidden;

& img{
    width:100%;
    height:100%;
}
@media(max-width:1023.5px){
    width:40px;
    height:40px;
}
`

export const StyledImgWrap = styled.div`
position:relative;
z-index:2;
max-width:559px;

& img{
    width:100%;
}

@media(max-width:1023.5px){
    max-width:45%;
}
@media(max-width:767.5px){
position:absolute;
z-index:1;
top:95px;
right:0;
max-width:432px;
}
@media(max-width:479.5px){
    top:160px;
    max-width:200px;
}
`

export const StyledSmTestWrap = styled(Link)`
display:flex;
gap:20px;
background:${colors.brand.green};
padding:33px 0;
justify-content:center;
align-items:center;
transition:all 0.5s;

&:hover{
    background:${hoverBtnColor.green};
}
& svg{
    transform:rotate(-90deg);
    fill:${typographyColor.lightBG.black} !important;
}
`

export const StyledLinkText = styled.p`
text-align:center;
font-size: 30px;
color:${typographyColor.lightBG.black};
font-weight: 700;
line-height: 32px;
`