import styled from "styled-components";
import { brandColors, hoverColors } from "../../../styledConstants";

export const Wrapper = styled.div`
display:flex;
gap:32px;
align-items:center;
`

export const IconWrap = styled.button`
width:40px;
height:40px;
& svg{
    fill:${brandColors.green};
}
&:hover svg{
fill:${hoverColors.green};
transition:all 0.5s;
}
`