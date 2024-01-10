import styled from "styled-components";
import { colors } from "../../styledConstantsColors";

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

@media(max-width:1439.5px){
    padding:1.5px 42px 1.5px 0px;
}

@media(max-width:1023.5px){
    padding:1.5px 20px 1.5px 0px;
}

@media(max-width:767.5px){
    gap:30px;
    padding:5px 22px 5px 0px;
}
@media(max-width:479.5px){
    gap:15px;
    padding:5px 18px 5px 0px;
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
font-size: 18px;
font-weight: 600;
line-height: 28px;
color:${colors.neutral.champagne};

@media(max-width:1439.5px){
    font-weight: 400;
    font-size:14px;
    line-height: 18px;
    letter-spacing: 0.28px;
}
`

export const SvgWrap = styled.button`

& svg{
    width:40px;
    height:40px;
    fill:${colors.neutral.champagne};
}

@media(max-width:1439.5px){
    width:32px;
    height:32px;
    & svg{
        width:32px;
        height:32px;
    }
}

@media(max-width:767.5px){
    width:24px;
    height:24px;
    & svg{
        width:24px;
        height:24px;
    }
}

`