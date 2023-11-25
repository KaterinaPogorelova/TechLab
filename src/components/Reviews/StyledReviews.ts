import styled from "styled-components";
import { backgroundColor, colors, typographyColor } from "../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";

export const StyledReviewsWrap = styled.div`
padding:100px 0 120px;
background:linear-gradient(180deg, #111 0%, #1A0F2D 100%);
border-radius: 0px 0px 80px 80px;

& h3{
    color:${typographyColor.darkBG.white};
}
;
`

export const StyledVideoWrap = styled.div`
position:relative;
cursor:pointer;
width:518px;
height:288px;

@media(max-width:1440px){
width:380px;
height:211px;
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
`

export const StyledVideoText = styled.div`
width:50%;
padding:34px 27px;
display:flex;
justify-content:space-between;
flex-direction:column;
`

export const StyledVideoQuote = styled.p`
font-size:${Desktop1920.bodyText.body2.size};
font-weight:${Desktop1920.bodyText.body2.weight};
letter-spacing:${Desktop1920.bodyText.body2.letterSpacing};
line-height:${Desktop1920.bodyText.body2.lineHeight};

@media(max-width:1440px){
font-size:${Desktop1440.bodyText.body2.size};
font-weight:${Desktop1440.bodyText.body2.weight};
letter-spacing:${Desktop1440.bodyText.body2.letterSpacing};
line-height:${Desktop1440.bodyText.body2.lineHeight};
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
`

export const StyledVideo = styled.iframe`
width:100%/* 518px */;
height:100%/* 288px */;
border-radius: 35px;
`