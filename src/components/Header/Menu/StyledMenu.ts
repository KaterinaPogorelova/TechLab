import styled from "styled-components";
import { linkSize, neutralColors, hoverColors } from "../../../styledConstants";
import { Link } from "react-router-dom";

export const Nav = styled.ul`
display:flex;
margin:0;
gap:32px;
`
export const LinkWrap = styled.li`
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

export const LinkContainer = styled.div`
font-size: ${linkSize.size};
font-weight: ${linkSize.weight};
color:${neutralColors.white};
`

export const LinkMain = styled(Link)`
color:${neutralColors.white};
font-size: ${linkSize.size};
font-weight: ${linkSize.weight};
`