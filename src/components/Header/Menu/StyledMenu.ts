import styled from "styled-components";
import { linkSize, neutralColors, hoverColors, activeColors } from "../../../styledConstants";

import { Link } from "react-router-dom";

export const StyledNav = styled.ul`
display:flex;
margin:0;
gap:32px;
`
export const StyledLinkWrap = styled.li`
display:flex;
gap:8px;
cursor:pointer;

& svg{
    fill:${neutralColors.white};
}
.svgWrap{
    width:24px;
    height:24px;
}
&:hover a{
    color:${hoverColors.green};
    transition:all 0.5s;
}

&:hover div{
    color:${hoverColors.green};
    transition:all 0.5s;
}

&:hover svg{
    fill:${hoverColors.green};
    transition:all 0.5s;
}
`

export const StyledLinkContainer = styled.div<{ $clickedTab: string, $title: string }>`
font-size: ${linkSize.size};
font-weight: ${linkSize.weight};
color:${props => props.$clickedTab === props.$title ? activeColors.green : neutralColors.white};
`

export const StyledLinkMain = styled(Link)`
color:${neutralColors.white};
font-size: ${linkSize.size};
font-weight: ${linkSize.weight};
`