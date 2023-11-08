import styled from "styled-components";

import { StyledContainer } from "../../../styledConstants";
import { backgroundColor, colors } from "../../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../../styledConstantsFont";

export const StyledSearchPanelWrap = styled.div<{ $activeTab: string }>`
position:absolute;
left:0;
top:0;
visibility:${props => props.$activeTab === 'SearchPanel' ? 'visible' : 'hidden'};
width:100%;
background:${backgroundColor.lightBlack};
transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(92px)' : 'translateY(0px)'};
opacity:${props => props.$activeTab === 'SearchPanel' ? '1' : '0'};
transition: all 0.5s;
z-index:3;
`

export const StyledContainerSearch = styled(StyledContainer)`
margin: 0 auto;
padding: 30px 0 40px;
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
font-size:${Desktop1920.subtitles.subtitle2.size};
font-weight:${Desktop1920.subtitles.subtitle2.weight};
color:${colors.neutral.white};
flex-grow:1;
@media(max-width:1440px){
    font-size:${Desktop1440.subtitles.subtitle2.size};
font-weight:${Desktop1440.subtitles.subtitle2.weight};
}
`

export const StyledCleanBtn = styled.button`
position:absolute;
top:0;
right:0;
`