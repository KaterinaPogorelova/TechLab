import styled from "styled-components";
import { backgroundColor, colors, gradient, typographyColor } from "../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

import lineLeft from '../../assets/img/lineLeftDir.svg'
import lineRight from '../../assets/img/lineRightDir.svg'

export const StyledDirectionsWrap = styled.div`
position:relative;
z-index:1;
overflow:hidden;
padding:105px 0px 125px;
background:${backgroundColor.black};
border-radius:0 0 80px 80px;


& h3{
    position:relative;
    color: ${typographyColor.darkBG.white};
    z-index:1;
    @media(max-width:1023.5px){
        font-size:40px;
    }
    @media(max-width:767.5px){
        font-size:30px;
        margin-bottom:10px;
        line-height: 32px;
        & span{
            padding:4px 10px;
        }
    }
    @media(max-width:479.5px){
        font-size:28px;
        line-height: 38px;
    }
}

&::before{
    position: absolute;
    content: "";
    top: 0px;
    left: 0;
    width:90%;
    height:100%;
    background:url(${lineLeft});
    background-repeat:no-repeat;
    border-radius:0 0 80px 80px;
    @media(max-width:1023.5px){
        left: -230px;
        top:-65px;
    }
    @media(max-width:767.5px){
        display:none;
    }
}
&::after{
    position: absolute;
    content: "";
    top: 0px;
    right: 0;
    width:10%;
    height:100%;
    background:url(${lineRight});
    background-repeat:no-repeat;
    border-radius:0 0 80px 80px;
    @media(max-width:767.5px){
        display:none;
    }
}
@media(max-width:1023.5px){
    border-radius:0px;
    padding:60px 0px 84px;
}
@media(max-width:767.5px){
    padding:50px 0px 70px;
}
`

export const StyledDirectionsSubtitle = styled.p`
font-size:${Desktop1920.subtitles.subtitle2.size};
font-weight:${Desktop1920.subtitles.subtitle2.weight};
color: ${typographyColor.darkBG.white};
margin-bottom:45px;
position:relative;
z-index:1;

@media(max-width:1440px){
    font-size:${Desktop1440.subtitles.subtitle2.size};
    font-weight:${Desktop1440.subtitles.subtitle2.weight};
}
@media(max-width:1023.5px){
    margin-bottom:24px;
}
@media(max-width:767.5px){
    font-size: 20px;
    margin-bottom:20px;
    font-weight: 300;
}
@media(max-width:479.5px){
    font-size: 18px;
}
`

export const StyledDirectionsList = styled.ul`
display:flex;
justify-content:center;
gap:24px;
margin-bottom:20px;
@media(max-width:1023.5px){
    gap:40px;
    justify-content:space-between;
}
@media(max-width:767.5px){
    gap:20px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:40px;
}
`

export const StyledDirectionsItem = styled.li<{ $color: string }>`
position:relative;
width:350px;
border-radius: 50px;
border:1px solid ${props => {
        if (props.$color === 'violet') return colors.brand.violet
        if (props.$color === 'green') return colors.brand.green
        if (props.$color === 'orange') return colors.brand.orange
    }};
background:${props => {
        if (props.$color === 'violet') return gradient.violet
        if (props.$color === 'green') return gradient.green
        if (props.$color === 'orange') return gradient.orange
    }};
padding:20px 40px 10px;
z-index: 1;

&::before{
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background:${props => {
        if (props.$color === 'violet') return colors.brand.violet //'linear-gradient(180deg, #8047EB 23.67%, rgba(128, 71, 235, 0.25) 87.28%)'
        if (props.$color === 'green') return colors.brand.green //'linear-gradient(180deg, #65DC6A 24.49%, rgba(101, 220, 106, 0.25) 94.23%)'
        if (props.$color === 'orange') return colors.brand.orange //'linear-gradient(180deg, #EC762E 23.27%, rgba(236, 118, 46, 0.24) 91.54%)'
    }};
    border-radius: 50px;
    z-index: -1;
    transition: opacity 0.5s linear;
    opacity: 0;
}

&:hover::before{
    opacity: 0.5;
}

@media(max-width:1440px){
    width:300px;
    padding:20px 30px 24px;
}
@media(max-width:1023.5px){
    padding:20px 28px;
    border-radius: 20px;
}
@media(max-width:767.5px){
    display:flex;
    flex-direction:column;
    padding:20px 20px 14px;
    width:calc(50% - 10px);
    border-radius: 24px;
}
@media(max-width:479.5px){
    width:100%;
    border-radius: 40px;
    padding:23px 38px;
}
}
`

export const StyledDirectionTitle = styled.h4`
color:${colors.neutral.white};
font-size:${Desktop1920.headings.h4.size};
font-weight:${Desktop1920.headings.h4.weight};
margin-bottom:20px;

@media(max-width:1440px){
    font-size:${Desktop1440.headings.h4.size};
    font-weight:${Desktop1440.headings.h4.weight};
}
@media(max-width:1023.5px){
    font-size:20px;
    margin-bottom:12px;
    font-weight: 600;
    line-height: 24px;
}
@media(max-width:767.5px){
    font-size: 26px;
font-weight: 700;
line-height: 28px;
margin-bottom:6px;
}
@media(max-width:479.5px){
    font-size: 32px;
font-weight: 800;
margin-bottom: 20px;
}
`

export const StyledDirectionCoursesList = styled.ul`
display:flex;
flex-direction:column;
gap:15px;
margin-bottom:10px;
@media(max-width:1023.5px){
    gap:5px;
    margin-bottom:12px;
}
@media(max-width:767.5px){
    margin-bottom:0px;
    gap:10px;
}
@media(max-width:479.5px){
    margin-bottom:10px;
}
`

export const StyledDirectionsCoursesItem = styled.li`
color:${colors.neutral.white};
font-size:${Desktop1920.lists.listCard.size};
font-weight:${Desktop1920.lists.listCard.weight};
letter-spacing:${Desktop1920.lists.listCard.letterSpacing};

@media(max-width:1440px){
    font-size:${Desktop1440.lists.listCard.size};
    font-weight:${Desktop1440.lists.listCard.weight};
    letter-spacing:${Desktop1440.lists.listCard.letterSpacing};
}
@media(max-width:1023.5px){
    font-weight: 300;
}
@media(max-width:767.5px){
font-size: 18px;
font-weight: 400;
}
@media(max-width:479.5px){
    font-size: 16px;
}
`