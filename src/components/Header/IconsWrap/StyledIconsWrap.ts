import styled from "styled-components";

import { defaultBtnColor, hoverBtnColor } from "../../../styledConstantsColors";

export const Wrapper = styled.div`
position:relative;
display:flex;
gap:32px;
align-items:center;
@media(max-width:767px){
    gap:26px;
}
@media(max-width:479px){
& #userIcon{
    display:none;
}
`

export const IconWrap = styled.button`
width:40px;
height:40px;
& svg{
    width:100%;
    height:100%;
    fill:${defaultBtnColor.green};
}
&:hover svg{
fill:${hoverBtnColor.green};
transition:all 0.5s;
}

@media(max-width:1440px){
    width:24px;
    height:24px;
}
@media(max-width:1024px){
    width:32px;
    height:32px;
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