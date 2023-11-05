import styled from "styled-components";
import { backgroundColors, titleSizes, weights, containerParams, neutralColors } from "../../../styledConstants";

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
background:${backgroundColors.lightblack};
transition: all 0.5s;
z-index:3;
`

export const Container = styled.div`
max-width: ${containerParams.width};
margin: 0 auto;
padding: 38px ${containerParams.padding} 20px;
display:flex;
gap:117px;
`

export const LinkSection = styled.h4`
color:${neutralColors.white};
font-size:${titleSizes.h4};
font-weight:${weights.medium};
`

export const SectionTitle = styled(Link)`
padding-left:36px;
color:${neutralColors.white};
font-size:${titleSizes.h5};
`