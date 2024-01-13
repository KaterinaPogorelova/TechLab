import styled from "styled-components";
import { backgroundColor, colors, defaultBtnColor, hoverBtnColor, typographyColor } from "../../../styledConstantsColors";
import { Link } from "react-router-dom";

export const StyledUserModalWrap = styled.div<{ $isOpened: boolean }>`
position:absolute;
width:408px;
top:22px;
visibility:${props => props.$isOpened ? 'visible' : 'hidden'};
right:0;
background:${backgroundColor.lightBlack};
transform:${props => props.$isOpened ? 'translateY(59px)' : 'translateY(0px)'};
opacity:${props => props.$isOpened ? '1' : '0'};
transition: all 0.5s;
padding:40px;
border-radius:0 0 20px 20px;

@media(max-width:1439.5px){
    top:25px;
    width:300px;
    padding:30px;
    transform:${props => props.$isOpened ? 'translateY(50px)' : 'translateY(0px)'};
}

@media(max-width:1023.5px){
    top:21px;
    transform:${props => props.$isOpened ? 'translateY(51px)' : 'translateY(0px)'};
}
@media(max-width:767.5px){
    top:15px;
    transform:${props => props.$isOpened ? 'translateY(39px)' : 'translateY(0px)'};
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:${props => props.$isOpened ? 'calc(100vh - 51px)' : '100vh'};
}
@media(max-width:479.5px){
    display:none;
}
`

export const StyledLogLink = styled(Link)`
display:block;
text-align:center;
width:100%;
background:${defaultBtnColor.green};
color:${typographyColor.lightBG.black};
padding:8px 24px;
border-radius: 100px;
font-size: 18px;
font-weight: 500;
line-height: 26px;
letter-spacing: 0.54px;
transition:all 0.5s;
margin:10px 0 30px;
&:hover{
    color:${typographyColor.darkBG.white};
    background:${hoverBtnColor.green};
}
@media(max-width:1439.5px){
    font-size:16px;
    font-weight:500;
    lineHeight:20px;
    letter-spacing:0.6px;
}
`

export const StyledSignText = styled.p`
font-size: 16px;
font-weight: 500;
letter-spacing: 0.32px;
color:${colors.neutral.white};
text-align:center;

& a{
    margin-left:20px;
    font-weight:700;
    transition:all 0.5s;
}
& a:hover{
    color:${hoverBtnColor.darkGray}
}
@media(max-width:1439.5px){
    font-size: 14px;
    letter-spacing: 0.28px;
}
`

export const StyledAuthLink = styled(Link)`
display:block;
text-align:center;
font-size: 20px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0.6px;
margin-bottom:24px;
color:${colors.neutral.mediumGray};
&:last-of-type{
    margin-bottom:0px;
}
`