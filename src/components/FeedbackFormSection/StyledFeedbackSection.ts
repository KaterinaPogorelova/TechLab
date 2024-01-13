import styled from "styled-components";
import { backgroundColor, defaultBtnColor, hoverBtnColor, notificationColor, typographyColor } from "../../styledConstantsColors";
import { StyledContainer, StyledFrameText } from "../../styledConstants";
import { Link } from "react-router-dom";

export const StyledFeedbackSection = styled.div`
position:relative;
padding:100px 0 45px;
background:${backgroundColor.black};
overflow:hidden;
@media(max-width:1023.5px){
    padding:0px;
}
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
@media(max-width:1439.5px){
    width: 45%;
    height: 33%;
}
@media(max-width:1023.5px){
    width: 20%;
}
@media(max-width:767.5px){
    display:none;
}
`

export const StyledLeftBottomLine = styled.img`
position:absolute;
left:0;
bottom:125px;
width:25%;
height:25%;
z-index: 1;
@media(max-width:1439.5px){
    width: 50%;
    height: 35%;
}
@media(max-width:1023.5px){
    bottom:195px;
    width: 37%;
    height: 35%;
}
@media(max-width:767.5px){
    display:none;
}
`
export const StyledRightTopLine = styled.img`
position:absolute;
right:0;
top:0;
width:22%;
height:80%;
z-index: 1;
@media(max-width:1439.5px){
    display:none;
}
@media(max-width:1023.5px){
    right:-55px;
    top:-19px;
    display:block;
    width:23%;
    height:80%;
}
@media(max-width:767.5px){
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
@media(max-width:1439.5px){
    display:none;
}
@media(max-width:1023.5px){
    right:0;
    bottom:165px;
    width:35%;
    height:33%;
    display:block;
}
@media(max-width:767.5px){
    display:none;
}
`
export const StyledFeedbackContainer = styled(StyledContainer)`
position:relative;
border-radius: 60px;
background:linear-gradient(90deg, #8047EB 0%, #67D1D1 52.09%, #65DC6A 106.81%);
height:838px;
margin-bottom:40px;

@media(max-width:1439.5px){
    height:780px;
    margin-bottom:109px;
}
@media(max-width:1023.5px){
    background:none;
    border:none;
    margin-bottom:46px;
    height:initial;
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

@media(max-width:1439.5px){
    padding:56px 80px 56px 0;
}
@media(max-width:1023.5px){
    position:static;
    width:704px;
    height:initial;
    margin:0 auto;
    gap:20px;
    padding:56px 0px 56px 0;
}
@media(max-width:767.5px){
    width:100%;
}
`
export const StyledFormText = styled(StyledFrameText)`
@media(max-width:1439.5px){
    font-size: 20px;
    line-height: 26px;
    margin-bottom:40px; 
}
@media(max-width:1023.5px){
    font-weight: 500;
    margin-bottom:24px; 
}
@media(max-width:767.5px){
    font-weight: 300;
    line-height: 26px;
    margin-bottom:0px; 
}
@media(max-width:479.5px){
    font-size: 18px;
    line-height: 24px;
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

@media(max-width:1439.5px){
    width:460px;
    height:462px;
}
@media(max-width:1023.5px){
    margin-top:62px;
    width:344px;
    height:346px;
}

@media(max-width:767.5px){
    margin:0 auto 27px;
    width:100%;
    width:317px;
    height:319px;
}
`

export const StyledFormInfo = styled.div`
width:532px;
& h3{
    color:${typographyColor.darkBG.white};
    font-size: 40px;
    margin-bottom: 10px;
}

@media(max-width:1439.5px){
    width:380px;
    & h3{
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 1.08px;
}

@media(max-width:1023.5px){
    width:344px;
    & h3{
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 1.2px;
        & span{
            padding:4px 4px;
        }
    }
}

@media(max-width:767.5px){
    width:100%;
    & h3{
        font-size: 30px;
        line-height: 32px;
        & span{
            padding:4px 15px;
        }
    }
}
}
`

export const StyledForm = styled.form`
display:flex;
flex-wrap:wrap;
gap:0px 16px;
width:360px;
@media(max-width:1439.5px){
    width:100%;
}
`

export const StyledFeedbackInputWrap = styled.div`
width:100%;
margin-bottom:10px;

&:last-of-type{
    margin-bottom:40px;
}
@media(max-width:1023.5px){
    &:last-of-type{
        margin-bottom:20px;
    }
}
@media(max-width:767.5px){
    width:calc(50% - 8px);
    &:last-of-type{
        width:100%;
    }
}
@media(max-width:479.5px){
    width:100%;
}
`

export const StyledLabel = styled.label`
color:${typographyColor.darkBG.white};
font-size:20px;
font-weight:400;
line-height:30px;
@media(max-width:1439.5px){
    font-size:16px;
    line-height:24px;
}
@media(max-width:1023.5px){
font-size: 20px;
font-weight: 600;
}
@media(max-width:767.5px){
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
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
@media(max-width:1023.5px){
    position:relative;
    z-index:2;
    padding:14px 16px;
    &:placeholder{
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.48px;
    }
    &:focus{
        padding:12px 14px;
    }
}
@media(max-width:767.5px){
    margin:0px 0 4px;
}
@media(max-width:479.5px){
    padding:17px 18px;
    font-size: 14px;
    line-height: 20px;

    &:focus{
        padding:15px 16px;
    }
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
@media(max-width:1023.5px){
    height:106px;
}
@media(max-width:767.5px){
    margin:0px 0 4px;
}
@media(max-width:479.5px){
    padding:17px 18px;
    font-size: 14px;
    line-height: 20px;
    height:160px;
    &:focus{
        padding:15px 16px;
    }
}
`

export const StyledErrorMessage = styled.p`
opacity:0;
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.32px;
color:${notificationColor.red};
@media(max-width:1439.5px){
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.32px;
    margin-bottom:10px;
}
@media(max-width:767.5px){
    margin-bottom:0px;
    font-size: 16px;
    line-height: 22px;
}
@media(max-width:479.5px){
    font-size: 14px;
    line-height: 20px;
}
`

export const StyledSubmitBtn = styled.button`
background:${defaultBtnColor.green};
padding:14px 40px;
font-size:24px;
font-weight:500;
line-height:30px;
color:${typographyColor.lightBG.black};
border-radius: 100px;
transition:all 0.5s;
&:hover{
    background:${hoverBtnColor.green};
}
@media(max-width:1439.5px){
    font-size:20px;
    font-weight:500;
    line-height:26px;
}
@media(max-width:1023.5px){
    padding:10px 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.1px;
}
@media(max-width:767.5px){
    padding:16px 32px;
    font-size: 22px;
    line-height: 24px;
    width:100%;
}
`
export const StyledFooter = styled.footer`
position:relative;
z-index:2;
@media(max-width:767.5px){
    padding-bottom:70px;
}
`

export const StyledFooterContainer = styled(StyledContainer)`
display:flex;
gap:24px;
padding-top:24px;
padding-bottom:24px;
@media(max-width:1439.5px){
    gap:20px; 
}
@media(max-width:1023.5px){
    width:735px;
    padding-right: 0px;
}
@media(max-width:767.5px){
    width:100%;
    flex-wrap:wrap;
}
`

export const StyledFooterSection = styled.div`
width:288px;

&:last-of-type{
    display:flex;
    flex-direction:column;
    align-items:end;
}
@media(max-width:1023.5px){
    width:118px;
    padding:4px 8px;
    &:nth-of-type(3){
        width:162px;
    }
    &:last-of-type{
        width:initial;
        margin-left:20px;
        justify-content:space-between;
    }
}
@media(max-width:767.5px){
    width:100%;
    &:last-of-type{
        margin-left:0;
        align-items:start;
        justify-content:initial;
    }
}
`

export const StyledFooterSectionTitle = styled.h5`
color:${typographyColor.darkBG.white};
font-size: 24px;
font-weight: 600;
line-height: 36px;
margin-bottom:12px;
@media(max-width:1439.5px){
    font-size: 18px;
    line-height: 24px;
}
@media(max-width:1023.5px){
    font-size: 20px;
    margin-bottom:16px;
}
@media(max-width:767.5px){
    font-size: 18px;
    letter-spacing: 0.36px;
}
@media(max-width:479.5px){
    font-weight: 500;
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
@media(max-width:1439.5px){
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
}
@media(max-width:1023.5px){
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}
@media(max-width:479.5px){
    font-weight: 300;
    margin-bottom:8px;
}
`

export const StyledFooterLogosWrap = styled.div`
position:relative;
display:flex;
gap:20px;
margin-bottom: 40px;
@media(max-width:1023.5px){
    margin-bottom: 0px;
    gap:10px;
}
@media(max-width:767.5px){
    padding-left:30px;
    gap:20px;
}
`

export const StyledLogoLink = styled.a`
width:48px;
height:48px;
& svg{
    width:100%;
    height:100%;
    transition:all 0.5s;
    fill:${typographyColor.darkBG.white};
    & rect{
        width:100%;
        height:100%;
    }
}
&:hover svg{
    fill:${hoverBtnColor.darkGray};
}
@media(max-width:1023.5px){
    width:40px;
    height:40px;
}
@media(max-width:767.5px){
    width:48px;
    height:48px;
}
`

export const StyledCopyright = styled.p`
color:${typographyColor.darkBG.white};
text-align: right;
font-size: 16px;
font-weight: 500;
letter-spacing: 0.32px;

@media(max-width:1439.5px){
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.28px;
}
@media(max-width:1023.5px){
    font-weight: 300;
    line-height: 16px;
}
@media(max-width:767.5px){
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.36px;
    padding-left:28px;
    text-align: left;
}
@media(max-width:479.5px){
    font-weight: 500;
}
`