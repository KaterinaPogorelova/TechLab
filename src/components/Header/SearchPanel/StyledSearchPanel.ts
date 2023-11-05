import styled from "styled-components";
import { backgroundColors, containerParams, neutralColors, desktopSizes } from "../../../styledConstants";

export const StyledSearchPanelWrap = styled.div<{ $activeTab: string }>`
position:absolute;
left:0;
top:0;
visibility:${props => props.$activeTab === 'SearchPanel' ? 'visible' : 'hidden'};
width:100%;
background:${backgroundColors.lightblack};
transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(92px)' : 'translateY(0px)'};
opacity:${props => props.$activeTab === 'SearchPanel' ? '1' : '0'};
transition: all 0.5s;
z-index:3;
`

export const StyledContainer = styled.div`
max-width: ${containerParams.width};
margin: 0 auto;
padding: 30px ${containerParams.padding} 40px;
`

export const StyledSearchInputWrap = styled.div`
position:relative;
width:100%
height:60px;
display:flex;
align-items:center;
gap:32px;
`

export const StyledSearchInput = styled.input`
border:none;
font-size:${desktopSizes.titleSizes.T4};
color:${neutralColors.white};
flex-grow:1;
`

export const StyledCleanBtn = styled.button`
position:absolute;
top:0;
right:0;
`