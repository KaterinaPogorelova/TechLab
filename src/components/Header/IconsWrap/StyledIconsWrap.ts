import styled from "styled-components";

import { defaultBtnColor, hoverBtnColor } from "../../../styledConstantsColors";

export const Wrapper = styled.div`
display:flex;
gap:32px;
align-items:center;
`

export const IconWrap = styled.button`
width:40px;
height:40px;
& svg{
    fill:${defaultBtnColor.green};
}
&:hover svg{
fill:${hoverBtnColor.green};
transition:all 0.5s;
}
`