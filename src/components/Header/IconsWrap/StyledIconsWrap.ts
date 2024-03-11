import styled from "styled-components";

import { defaultBtnColor, hoverBtnColor } from "../../../styledConstantsColors";

export const Wrapper = styled.div`
display:flex;
gap:32px;
align-items:center;
@media(max-width:767.5px){
    gap:26px;
}
@media(max-width:479.5px){
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

@media(max-width:1439.5px){
    width:24px;
    height:24px;
}
@media(max-width:1023.5px){
    width:32px;
    height:32px;
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