import styled from "styled-components";
import { StyledContainer } from "../../styledConstants";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";
import { backgroundColor } from "../../styledConstantsColors";

export const StyledAboutUsWrap = styled.div`
position:relative;
z-index:1;
padding: 90px 0 54px;
border-radius: 0px 0px 80px 80px;
background:${backgroundColor.champagne};
`

export const StyledAboutContainer = styled(StyledContainer)`
display:flex;
`

export const StyledImgWrap = styled.div`
position:relative;
transform:translateX(-20px);
width:541px;
height:544px;
overflow:hidden;

& img{
    width:100%;
    height:100%;
}
@media (max-width: 1440px){
    transform:translateX(0px);
    margin-right:30px;
    width:450px;
    height:453px;
}
`

export const StyledInfoWrap = styled.div`
flex-grow: 1;
width: min-content;
padding-top:60px;

& h3{
    line-height: 80px;
    margin-bottom: 10px;
}
@media (max-width: 1440px){
    & h3{
        font-size:36px;
        line-height: 45px;
        letter-spacing: 1.08px;
    }
}
`

export const StyledInfo = styled.p`
font-size:${Desktop1920.bodyText.body2.size};
font-weight:${Desktop1920.bodyText.body2.weight};
letter-spacing:${Desktop1920.bodyText.body2.letterSpacing};
line-height:${Desktop1920.bodyText.body2.lineHeight};
margin-bottom:20px;
& span{
    font-weight:700;
}

@media(max-width:1440px){
font-size:${Desktop1440.bodyText.body2.size};
font-weight:${Desktop1440.bodyText.body2.weight};
letter-spacing:${Desktop1440.bodyText.body2.letterSpacing};
line-height:${Desktop1440.bodyText.body2.lineHeight};
}
`