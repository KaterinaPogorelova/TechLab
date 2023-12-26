import styled from "styled-components";
import { } from "../../../styledConstants";

import { Link } from "react-router-dom";
import { activeBtnColor, backgroundColor, colors, defaultBtnColor, hoverBtnColor, typographyColor } from "../../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../../styledConstantsFonts";

export const StyledNav = styled.ul`
display:flex;
align-items:center;
margin:0;

@media(max-width:1023.5px){
display:none;
}
`

export const StyledLinkWrap = styled.li`
display:flex;
gap:8px;
cursor:pointer;
padding:27px 32px;

&:hover a{
    color:${hoverBtnColor.green};
    transition:all 0.5s;
}

&:hover svg{
    fill:${hoverBtnColor.green};
    transition:all 0.5s;
}

&:hover div{
    color:${hoverBtnColor.green};
    transition:all 0.5s;
}
`

export const StyledSvgWrap = styled.div<{ $isClicked?: boolean }>`
transform:${props => props.$isClicked ? 'rotate(180deg)' : 'rotate(0deg)'};
    width:24px;
    height:24px;
& svg{
    width:100%;
    height:100%;
    fill: ${props => props.$isClicked ? activeBtnColor.green : colors.neutral.white}
}
@media(max-width:1439.5px){
    width:20px;
    height:20px;
}
`

export const StyledLinkContainer = styled.div<{ $clickedTab: string, $title: string }>`
font-size: ${Desktop1920.buttons.buttonSm.size};
font-weight: ${Desktop1920.buttons.buttonSm.weight};
color:${props => props.$clickedTab === props.$title ? activeBtnColor.green : defaultBtnColor.white};
@media(max-width:1439.5px){
    font-size: ${Desktop1440.buttons.buttonSm.size};
    font-weight: ${Desktop1440.buttons.buttonSm.weight};
}
`

export const StyledLinkMain = styled(Link)`
color:${defaultBtnColor.white};
font-size: ${Desktop1920.buttons.buttonSm.size};
font-weight: ${Desktop1920.buttons.buttonSm.weight};
@media(max-width:1439.5px){
    font-size: ${Desktop1440.buttons.buttonSm.size};
    font-weight: ${Desktop1440.buttons.buttonSm.weight};
}
`
export const StyledTestBtn = styled(Link)`
border-radius: 35px;
border:1px solid ${defaultBtnColor.green};
height: min-content;
padding:10px 16px;
color:${colors.brand.green};
background:${backgroundColor.green10};
font-size:${Desktop1920.buttons.buttonSm.size};
font-weight:${Desktop1920.buttons.buttonSm.weight};
letter-spacing:${Desktop1920.buttons.buttonSm.letterSpacing};
line-height:${Desktop1920.buttons.buttonSm.lineHeight};
transition:all 0.5s;

&:hover{
    background:${backgroundColor.green50};
}

@media(max-width:1439.5px){
padding:6px 16px;
font-size:${Desktop1440.buttons.buttonSm.size};
font-weight:${Desktop1440.buttons.buttonSm.weight};
letter-spacing:${Desktop1440.buttons.buttonSm.letterSpacing};
line-height:${Desktop1440.buttons.buttonSm.lineHeight};
}
`
////TABLET

export const StyledMobMenuWrap = styled.div<{ $isClicked: boolean, $isRunlineClosed: boolean }>`
position:fixed;
top:${props => props.$isRunlineClosed ? '72px' : '114px'};
left:-360px;
width:360px;
min-height:100vh;
padding:24px 24px 24px 85px;
background:${backgroundColor.black};
z-index:4;
visibility:${props => props.$isClicked ? 'visible' : 'hidden'};
opacity:${props => props.$isClicked ? '1' : '0'};
transform:${props => props.$isClicked ? 'translateX(360px)' : 'translateX(0px)'};
transition: all 0.5s;

@media(max-width:767.5px){
    padding:24px 30px;
    top:${props => props.$isRunlineClosed ? '48px' : '82px'};
    width:100%;
    ${props => props.$isClicked ? '' : 'translateX(0px)'};
}
`

export const StyledLinksCategory = styled.div<{ $isClicked: boolean }>`
display:flex;
justify-content:space-between;
padding:8px 0;
width:100%;
& svg{
    width:32px;
    height:32px;
    fill:${props => props.$isClicked ? hoverBtnColor.green : colors.neutral.white};
    transform:${props => props.$isClicked ? 'rotate(0deg)' : 'rotate(-90deg)'};
}
& h4{
    color:${props => props.$isClicked ? hoverBtnColor.green : colors.neutral.white};
}
`
export const StyledCategoryName = styled.h4`
font-size: 24px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0.4px;
@media(max-width:767.5px){
    font-size: 20px;
}
`

export const StyledMenuLink = styled(Link)`
display:block;
color:${colors.neutral.white};
padding:8px 0;
width:100%;
font-size: 24px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0.5px;
margin-bottom:16px;
&:hover{
    color:${hoverBtnColor.green};
}
`

export const StyledSignUpLink = styled(Link)`
width:164px;
display:block;
text-align:center;
border-radius:100px;
padding: 10px 24px;
margin-bottom:12px;

border:1px solid ${defaultBtnColor.white};
background:none;
color:${typographyColor.darkBG.white};
transition:all 0.5s;

&:hover{
    background:none;
    color:${hoverBtnColor.green};
    border:1px solid ${hoverBtnColor.green};
}
@media(max-width:767.5px){
    width:200px;
}
`

export const StyledLogInLink = styled(StyledSignUpLink)`
width:164px;
background:${colors.brand.green};
color:${typographyColor.lightBG.black};
display:flex;
justify-content:center;
border:none;
transition:all 0.5s;

&:hover{
    background:${hoverBtnColor.green};
    color:${typographyColor.lightBG.black};
}

@media(max-width:767.5px){
    width:200px;
}
`
export const StyledLinkText = styled.p`
color:${typographyColor.darkBG.white};
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0.1px;
`

export const StyledHelp = styled(Link)`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color:${colors.neutral.mediumGray};
padding:4px 8px;
transition:all 0.5s;
&:hover{
    color:${hoverBtnColor.green};
}
`
////Mobile

export const StyledQuestion = styled.p`
color:${colors.neutral.white};
font-size:16px;
font-weight: 400;
line-height: 24px;
margin-bottom:8px;

@media(max-width:767.5px){
    font-size: 14px;
}
`

export const StyledLinksCategoryMob = styled.div`
display:flex;
height: 40px;
justify-content:space-between;
margin-bottom:10px;
cursor:pointer;
& h4{
    color:${colors.neutral.white};
}
& svg{
    width:20px;
    height:20px;
    transform:rotate(-90deg);
}
`

export const StyledMenuLinkMob = styled(Link) <{ $isTest: boolean | undefined }>`
display:block;
font-size: 24px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0.4px;
margin-bottom:${props => props.$isTest ? '30px' : '10px'};
height: 40px;
color:${props => props.$isTest ? colors.brand.green : colors.neutral.white};

@media(max-width:767.5px){
    font-size: 20px;
}
`

export const StyledLinksListPanel = styled.div<{ $isMenuOpened: boolean, $hasLinks: boolean }>`
position:absolute;
top:72px;
left:-360px;
width:360px;
min-height:100vh;
padding:24px 32px;
background:${backgroundColor.black};
visibility:${props => (props.$isMenuOpened && props.$hasLinks) ? 'visible' : 'hidden'};
opacity:${props => (props.$isMenuOpened && props.$hasLinks) ? '1' : '0'};
transform:${props => (props.$isMenuOpened && props.$hasLinks) ? 'translateX(360px)' : 'translateX(-360px)'};
z-index:5;
transition:all 0.5s;

@media(max-width:767.5px){
    top:48px;
    left:-100%;
    width:100%;
    ${props => (props.$isMenuOpened && props.$hasLinks) && 'transform: translateX(100%)'};
}
`
export const StyledBtnBack = styled.button`
display:flex;
gap:10px;
align-items:center;
margin-bottom:16px;
& svg{
    width:20px;
    height:20px;
    fill:${colors.neutral.darkGray};
    transform:rotate(90deg);
}
`

export const StyledBtnBackText = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0.4px;
color:${colors.neutral.darkGray};

@media(max-width:767.5px){
    font-size: 20px;
}
`

export const StyledLinkSection = styled.h4`
display:block;
margin:0 40px 16px;
font-size: 24px;
font-weight: 500;
line-height: 26px;
color:${colors.neutral.white};

@media(max-width:767.5px){
    font-size: 20px;
}
`

export const StyledLinksWrap = styled.div`
margin-right:64px;
display:flex;
justify-content:space-between;
cursor:pointer;
& div{
    margin-top:2px;
}
& svg{
    width:20px;
    height:20px;
    fill:${colors.neutral.white};
    transform:rotate(-90deg);
}
`
export const StyledLinkAll = styled(Link)`
margin:0px 64px 16px;
display:block;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.36px;
color:${colors.neutral.white};
transition:all 0.5s;
&:hover{
    color:${hoverBtnColor.green};
}
@media(max-width:767.5px){
    font-size: 18px;
}
`

export const StyledLink = styled.h5`
margin:0 0px 16px 64px;
display:block;
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.36px;
color:${colors.neutral.white};

@media(max-width:767.5px){
    font-size: 18px;
}
`
export const StyledSemiLinksListPanel = styled(StyledLinksListPanel)`
z-index:6;
`