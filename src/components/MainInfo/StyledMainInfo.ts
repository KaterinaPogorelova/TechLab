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

@media(max-width:1440px){
    width:43%;
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

@media(max-width:1440px){
    width:57%;
}
}
`

export const StyledMainContainer = styled(StyledContainer)`
display:flex;
`

export const StyledInfoWrap = styled.div`
position:relative;
z-index:2;
max-width:665px;
@media(max-width:1440px){
    max-width:510px;
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
@media(max-width:1440px){
    font-size:56px;
    width:337px;
}
`
export const StyledTextWrap = styled.div`
position:relative;
margin-bottom:140px;
width:410px;
@media(max-width:1440px){
    width:260px;
    margin-bottom:70px;
}
`

export const StyledText = styled.p`
color:${typographyColor.darkBG.white};
font-size: ${Desktop1920.bodyText.body1.size};
font-weight: ${Desktop1920.bodyText.body1.weight};

@media(max-width:1440px){
    font-size: ${Desktop1440.bodyText.body1.size};
}
`

export const StyledSvgWrap = styled.div`
position:absolute;
top:8px;
right:0;
width:133px;
height:134px;

& svg{
    width:100%;
    height:100%;
}

@media(max-width:1440px){
    width:92px;
    height:70px;
}
`

export const StyledCoursesList = styled.ul`
display:flex;
flex-wrap:wrap;
gap:12px;
margin-bottom:43px;
`

export const StyledCoursesItemWrap = styled.li <{ $color: string }>`
border-radius:40px;
background:${props => props.$color === 'gradient' ? typographyGradient.G3 : 'none'};
`

export const StyledCoursesItem = styled(Link) <{ $color: string }>`
border:${props => {
        if (props.$color === 'violet') return ('1px solid' + colors.brand.violet)
        if (props.$color === 'green') return ('1px solid' + colors.brand.green)
        if (props.$color === 'orange') return ('1px solid' + colors.brand.orange)
        if (props.$color === 'gradient') return 'none'
    }};
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
        if (props.$color === 'gradient') return gradient.gradient20
    }}
}
@media(max-width:1440px){
    font-size:${Desktop1440.badges.info.size};
}
`

export const StyledExpertsWrap = styled.div`
display:flex;
align-items:center;
gap:25px;
@media(max-width:1440px){
    gap:8px;
}
`

export const StyledExpertsText = styled.p`
font-size: 28px;
font-weight: 600;
color:${typographyColor.darkBG.white};

@media(max-width:1440px){
    font-size: 18px;
    font-weight: 400;
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
`

export const StyledImgWrap = styled.div`
position:relative;
z-index:2;
max-width:559px;

& img{
    width:100%;
}
`