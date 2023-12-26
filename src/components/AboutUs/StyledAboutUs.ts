import styled from "styled-components";
import { StyledContainer } from "../../styledConstants";
import { Desktop1440, Desktop1920 } from "../../styledConstantsFonts";
import { backgroundColor, colors } from "../../styledConstantsColors";

export const StyledAboutUsWrap = styled.div`
position:relative;
z-index:1;
padding: 90px 0 54px;
border-radius: 0px 0px 80px 80px;
background:${backgroundColor.champagne};
@media (max-width: 1023.5px){
    padding: 59px 0 72px;
    border-radius: 0px;
}
@media (max-width: 767.5px){
    padding: 50px 0 70px;
}
`

export const StyledAboutContainer = styled(StyledContainer)`
display:flex;
@media (max-width: 767.5px){
    flex-direction:column;
    align-items:center;
}
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
@media (max-width: 1439.5px){
    transform:translateX(0px);
    margin-right:30px;
    width:450px;
    height:453px;
}
@media (max-width: 1023.5px){
    width:267px;
    height:270px;
}
@media (max-width: 767.5px){
    width:245px;
    height:248px;
    margin: 0 auto 20px;
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
@media (max-width: 1439.5px){
    & h3{
        font-size:36px;
        line-height: 45px;
        letter-spacing: 1.08px;
    }
}
@media (max-width: 1023.5px){
    padding-top:0px;
    & h3{
        font-size: 40px;
        font-weight: 700;
        line-height: 55px;
        letter-spacing: 1.2px;
        margin-bottom:24px;
        & span{
            padding:8px 2px;
        }
    }
    & a{
        margin-left:0;
    }
}
@media (max-width: 767.5px){
    width:100%;
    & h3{
        font-size: 30px;
        line-height: 40px;
        margin-bottom:20px;
        & span{
            padding:5px 5px;
        }
    }
    & a{
        margin-left:auto;
        & p{
            font-weight: 600;
        }
        & svg{
            fill:${colors.neutral.darkBlack};
        }
    }
}
@media (max-width: 479.5px){
    & h3{
        font-size: 28px;
        line-height: 38px;
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

@media(max-width:1439.5px){
font-size:16px;
letter-spacing:0.32px;
line-height:24px;
}
@media (max-width: 1023.5px){
font-weight: 400;
margin-bottom:12px;
}
@media (max-width: 767.5px){
    margin-bottom:20px;
}
`