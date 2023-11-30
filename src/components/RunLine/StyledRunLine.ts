import styled from "styled-components";
import { colors } from "../../styledConstantsColors";

import { Desktop1920, Desktop1440 } from "../../styledConstantsFonts";
export const RunLineBlockWrap = styled.div`
position:fixed;
top:0;
left:0;
padding:5px 100px 5px 0px;
display:flex;
align-items:center;
gap:50px;
background:${colors.brand.violet};
z-index:3;
width:100%;

@media(max-width:1440px){
    padding:5px 32px 5px 0px;
}
@media(max-width:767px){
    gap:30px;
    padding:5px 32px 5px 0px;
}
@media(max-width:479px){
    gap:15px;
    padding:5px 15px 5px 0px;
}
`
export const RunLineWrap = styled.div`
position:relative;
overflow: hidden;
display: flex;
gap: 30px;
`

export const RunLineList = styled.ul`
flex-shrink: 0;
display:flex;
gap:30px;
justify-content: space-around;
min-width: 100%;
height: fit-content;
animation: scroll 20s linear infinite;
`

export const RunLineItem = styled.li`
transition: all 0.1s ease-in-out;
font-size:${Desktop1920.headings.h6.size};
font-weight:${Desktop1920.headings.h6.weight};
color:${colors.neutral.champagne};

@media(max-width:1440px){
    font-size:${Desktop1440.headings.h6.size};
    font-weight:${Desktop1440.headings.h6.weight};
}
`

export const SvgWrap = styled.button`

& svg{
    width:40px;
    height:40px;
    fill:${colors.neutral.champagne};
}

@media(max-width:1440px){
    width:32px;
    height:32px;
    & svg{
        width:32px;
        height:32px;
    }
}

@media(max-width:767px){
    width:24px;
    height:24px;
    & svg{
        width:24px;
        height:24px;
    }
}

`