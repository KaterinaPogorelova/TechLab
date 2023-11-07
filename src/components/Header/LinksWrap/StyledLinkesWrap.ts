import styled from "styled-components";

import { StyledContainer } from "../../../styledConstants";
import { backgroundColor, colors } from "../../../styledConstantsColors";
import { Desktop1920, Desktop1440 } from "../../../styledConstantsFont";

import { Link } from "react-router-dom";

export const Wrapper = styled.div<{ $linkSections: string[] | undefined }>`
position:absolute;
left:0;
top:0;
visibility:${props => props.$linkSections ? 'visible' : 'hidden'};
transform:${props => props.$linkSections ? 'translateY(92px)' : 'translateY(0px)'};
opacity:${props => props.$linkSections ? '1' : '0'};
width:100%;
height:280px;
background:${backgroundColor.lightBlack};
transition: all 0.5s;
z-index:3;
`

export const Container = styled(StyledContainer)`
margin: 0 auto;
padding-top: 38px;
display:flex;
gap:117px;
`

export const LinkSection = styled.h4`
color:${colors.neutral.white};
font-size:${Desktop1920.headings.h5.size};
font-weight:${Desktop1920.headings.h5.weight};
@media(max-width:1440px){
    font-size:${Desktop1440.headings.h5.size};
    font-weight:${Desktop1440.headings.h5.weight};
}
`

export const SectionTitle = styled(Link)`
padding-left:36px;
color:${colors.neutral.white};
font-size:${Desktop1920.links.submenu.size};
font-weight:${Desktop1920.links.submenu.weight};
@media(max-width:1440px){
    font-size:${Desktop1440.links.bodyLink.size};
    font-weight:${Desktop1440.links.bodyLink.weight};
}
`