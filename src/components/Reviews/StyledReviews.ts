import styled from "styled-components";
import { colors, typographyColor } from "../../styledConstantsColors";

export const StyledReviewsWrap = styled.div`
padding:100px 0 120px;
background:linear-gradient(180deg, #111 0%, #1A0F2D 100%);
border-radius: 0px 0px 80px 80px;

& h3{
    color:${typographyColor.darkBG.white};
}
@media(max-width:1023.5px){
    padding:60px 0 122px;
    border-radius: 0px;

    & h3{
        font-size: 40px;
        font-weight: 700;
        line-height: 48px;
        letter-spacing: 1.2px;
        margin-bottom: 24px;
        & span{
            padding:8px 16px;
        }
    }
}
@media(max-width:767.5px){
    padding:50px 0 70px;
    & h3{
        font-size: 30px;
        font-weight: 700;
        line-height: 40px;
        width:305px;
        margin-bottom: 10px;
        & span{
            padding:0px 14px;
        }
    }
}
@media (max-width:359.5px) {
    & h3{
        width:100%;
    }
}
;
`

export const StyledVideoWrap = styled.div`
position:relative;
cursor:pointer;
width:518px;
height:288px;

@media(max-width:1439.5px){
width:380px;
height:211px;
}
@media(max-width:1023.5px){
    width: 344px;
    height:180px;
}
@media(max-width:767.5px){
    width: 320px;
    height:163px;
}
@media(max-width:359.5px){
    width:calc(100% - 40px);
}
`

export const StyledPreview = styled.div<{ $isVisible: boolean, $color: string }>`
display:${props => props.$isVisible ? 'none' : 'flex'};
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:${props => props.$color};
z-index:2;
border-radius:35px;
overflow:hidden;
border:2px solid ${colors.brand.violet};
transition:all 0.5s;

&:hover{
    border:2px solid ${colors.brand.orange};
}
@media(max-width:1023.5px){
    border:none;
}
`

export const StyledVideoText = styled.div`
width:50%;
padding:34px 27px;
display:flex;
justify-content:space-between;
flex-direction:column;
& svg{
    width:44px;
    height:33px;
}
@media(max-width:1023.5px){
    padding:24px 16px;
    width:53%;
}
@media(max-width:767.5px){
    padding:24px 12px;
    width:50%;
    & svg{
        width:36px;
        height:27px;
    }
}
`

export const StyledVideoQuote = styled.p`
font-size:20px;
font-weight:500;
letter-spacing:0.4px;
line-height:30px;

@media(max-width:1439.5px){
font-size:16px;
line-height:24px;
}
@media(max-width:1023.5px){
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
}
@media(max-width:767.5px){
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
}
`

export const StyledImgWrap = styled.div`
height:100%;
width:50%;

& img{
    display:block;
    height:100%;
    width:100%;
}
@media(max-width:1023.5px){
    width:47%;
}
@media(max-width:767.5px){
    width:50%;
}
`

export const StyledVideo = styled.iframe`
width:100%/* 518px */;
height:100%/* 288px */;
border-radius: 35px;
`