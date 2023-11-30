import styled from "styled-components";
import { backgroundColor, defaultBtnColor, hoverBtnColor, notificationColor, typographyColor } from "../../styledConstantsColors";
import { StyledContainer, StyledFrameText } from "../../styledConstants";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";
import { Link } from "react-router-dom";

export const StyledFeedbackSection = styled.div`
position:relative;
padding:100px 0 45px;
background:${backgroundColor.black};
overflow:hidden;
`
export const StyledBgLineswrap = styled.div`
position:absolute;
top:0;
width:100%;
height:100%;
overflow:hidden;
`
export const StyledLeftTopLine = styled.img`
position:absolute;
top:0;
left:0;
width:25%;
height:25%;
z-index: 1;
@media(max-width:1440px){
    width: 45%;
    height: 33%;
}
`

export const StyledLeftBottomLine = styled.img`
position:absolute;
left:0;
bottom:125px;
width:25%;
height:25%;
z-index: 1;
@media(max-width:1440px){
    width: 50%;
    height: 35%;
}
`
export const StyledRightTopLine = styled.img`
position:absolute;
right:0;
top:0;
width:22%;
height:80%;
z-index: 1;
@media(max-width:1440px){
    display:none;
}
`
export const StyledRightBottomLine = styled.img`
position:absolute;
right:0;
bottom:0;
width:35%;
height:23%;
z-index: 1;
@media(max-width:1440px){
    display:none;
}
`
export const StyledFeedbackContainer = styled(StyledContainer)`
position:relative;
border-radius: 60px;
background:linear-gradient(90deg, #8047EB 0%, #67D1D1 52.09%, #65DC6A 106.81%);
height:838px;
margin-bottom:40px;

@media(max-width:1440px){
    height:780px;
    margin-bottom:109px;
}
`

export const StyledFeedbackFormWrap = styled.div`
position:absolute;
bottom:1px;
left:1px;
width:calc(100% - 2px);
height:calc(100% - 2px);
background:${backgroundColor.black};
padding:56px 60px;
border-radius: 60px;
display:flex;
gap:41px;

@media(max-width:1440px){
    padding:56px 80px 56px 0;
}
`
export const StyledFormText = styled(StyledFrameText)`
@media(max-width:1440px){
    font-size: 20px;
    line-height: 26px;
    margin-bottom:40px; 
}
`

export const StyledImgWrap = styled.div`
margin-top:104px;
width:530px;
height:532px;

& img{
    width:100%;
    height:100%;
}

@media(max-width:1440px){
    width:460px;
    height:462px;
}
`

export const StyledFormInfo = styled.div`
width:532px;
& h3{
    color:${typographyColor.darkBG.white};
    font-size: 40px;
    margin-bottom: 10px;
}

@media(max-width:1440px){
    width:380px;
    & h3{
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 1.08px;
}
}
`

export const StyledForm = styled.form`
width:360px;
@media(max-width:1440px){
    width:100%;
}
`

export const StyledFeedbackInputWrap = styled.div`
width:100%;
margin-bottom:10px;

&:last-of-type{
    margin-bottom:40px;
}
`

export const StyledLabel = styled.label`
color:${typographyColor.darkBG.white};
font-size:${Desktop1920.labels.formLabel.size};
font-weight:${Desktop1920.labels.formLabel.weight};
line-height:${Desktop1920.labels.formLabel.lineHeight};
@media(max-width:1440px){
    font-size:${Desktop1440.labels.formLabel.size};
font-weight:${Desktop1440.labels.formLabel.weight};
line-height:${Desktop1440.labels.formLabel.lineHeight};
}
`

export const StyledInput = styled.input`
display:block;
width:100%;
margin:8px 0 4px;
border-radius:6px;
padding:17px 18px;
background:${backgroundColor.violet40};
color:${typographyColor.darkBG.white};

&:focus{
    border:2px solid ${typographyColor.lightBG.violet};
    padding:15px 16px;
}
`

export const StyledTextarea = styled.textarea`
display:block;
resize:none;
width:100%;
height:160px;
border-radius:6px;
padding:17px 18px;
background:${backgroundColor.violet40};
color:${typographyColor.darkBG.white};
outline:none;
margin:8px 0 4px;

&:focus{
    border:2px solid ${typographyColor.lightBG.violet};
    padding:15px 16px;
}
`

export const StyledErrorMessage = styled.p`
opacity:0;
font-size: ${Desktop1920.bodyText.body3.size};
font-weight: ${Desktop1920.bodyText.body3.weight};
line-height: ${Desktop1920.bodyText.body3.lineHeight};
letter-spacing: ${Desktop1920.bodyText.body3.letterSpacing};
color:${notificationColor.red};
@media(max-width:1440px){
    font-size: ${Desktop1440.bodyText.body3.size};
font-weight: ${Desktop1440.bodyText.body3.weight};
line-height: ${Desktop1440.bodyText.body3.lineHeight};
letter-spacing: ${Desktop1440.bodyText.body3.letterSpacing};
margin-bottom:10px;
}
`

export const StyledSubmitBtn = styled.button`
background:${defaultBtnColor.green};
padding:14px 40px;
font-size:${Desktop1920.buttons.buttonMd.size};
font-weight:${Desktop1920.buttons.buttonMd.weight};
line-height:${Desktop1920.buttons.buttonMd.lineHeight};
color:${typographyColor.lightBG.black};
border-radius: 100px;
transition:all 0.5s;
&:hover{
    background:${hoverBtnColor.green};
}
@media(max-width:1440px){
    font-size:${Desktop1440.buttons.buttonMd.size};
font-weight:${Desktop1440.buttons.buttonMd.weight};
line-height:${Desktop1440.buttons.buttonMd.lineHeight};
}
`
export const StyledFooter = styled.footer`
position:relative;
z-index:2;
`

export const StyledFooterContainer = styled(StyledContainer)`
display:flex;
gap:24px;
padding-top:24px;
padding-bottom:24px;
@media(max-width:1440px){
    gap:20px;
}
`

export const StyledFooterSection = styled.div`
width:288px;

&:last-of-type{
    display:flex;
    flex-direction:column;
    align-items:end;
}
`

export const StyledFooterSectionTitle = styled.h5`
color:${typographyColor.darkBG.white};
font-size: 24px;
font-weight: 600;
line-height: 36px;
margin-bottom:12px;
@media(max-width:1440px){
    font-size: 18px;
    line-height: 24px;
}

`

export const StyledFooterLink = styled(Link) <{ $isTest?: boolean }>`
display:block;
color:${props => props.$isTest ? typographyColor.darkBG.green : typographyColor.darkBG.white};
font-size: 16px;
font-weight: 500;
letter-spacing: 0.32px;
margin-bottom:12px;
transition:all 0.5s;

&:last-child{
    margin-bottom:0px;
}
&:hover{
    color:${hoverBtnColor.darkGray}
}
@media(max-width:1440px){
    font-size: 14px;
line-height: 20px;
letter-spacing: 0.28px;
}
`

export const StyledFooterLogosWrap = styled.div`
position:relative;
display:flex;
gap:20px;
margin-bottom: 40px;
`

export const StyledLogoLink = styled.a`
width:48px;
height:48px;
& svg{
    transition:all 0.5s;
    fill:${typographyColor.darkBG.white};
}
&:hover svg{
    fill:${hoverBtnColor.darkGray};
}
`

export const StyledCopyright = styled.p`
color:${typographyColor.darkBG.white};
text-align: right;
font-size: 16px;
font-weight: 500;
letter-spacing: 0.32px;
@media(max-width:1440px){
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
}
`