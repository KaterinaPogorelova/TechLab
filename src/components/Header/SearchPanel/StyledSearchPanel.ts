import styled from "styled-components";

import { StyledContainer } from "../../../styledConstants";
import { backgroundColor, colors } from "../../../styledConstantsColors";
import { Desktop1440, Desktop1920 } from "../../../styledConstantsFonts";

export const StyledSearchPanelWrap = styled.div<{ $activeTab: string }>`
position:absolute;
left:0;
top:0;
visibility:${props => props.$activeTab === 'SearchPanel' ? 'visible' : 'hidden'};
width:100%;
background:${backgroundColor.lightBlack};
transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(77px)' : 'translateY(0px)'};
opacity:${props => props.$activeTab === 'SearchPanel' ? '1' : '0'};
transition: all 0.5s;
z-index:3;

@media(max-width:1439.5px){
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(73px)' : 'translateY(0px)'};
}

@media(max-width:1023.5px){
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(72px)' : 'translateY(0px)'};
}
@media(max-width:767.5px){
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(48px)' : 'translateY(0px)'};
}
@media(max-width:479.5px){
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(53px)' : 'translateY(0px)'};
}
`

export const StyledContainerSearch = styled(StyledContainer)`
margin: 0 auto;
padding: 30px 0 40px;

@media(max-width:1439.5px){
    padding: 20px 0px 30px;
}
@media(max-width:1023.5px){
    padding: 20px 32px 30px;
}
`

export const StyledSearchInputWrap = styled.div`
position:relative;
width:100%;
height:60px;
display:flex;
align-items:center;
gap:32px;
@media(max-width:1439.5px){
    height:40px;
}
`

export const StyledSearchInput = styled.input`
border:none;
font-size:${Desktop1920.subtitles.subtitle2.size};
font-weight:${Desktop1920.subtitles.subtitle2.weight};
color:${colors.neutral.white};
flex-grow:1;
@media(max-width:1439.5px){
    font-size:${Desktop1440.subtitles.subtitle2.size};
font-weight:${Desktop1440.subtitles.subtitle2.weight};
}
`

export const StyledCleanBtn = styled.button`
position:absolute;
top:0;
right:0;
width:40px;
height:40px;

& svg{
    width:100%;
    height:100%;
}
@media(max-width:1439.5px){
    top:7px;
    width:24px;
    height:24px;
}
@media(max-width:1023.5px){
    top:5px;
    width:32px;
    height:32px;
}

@media(max-width:767.5px){
    top:8px;
    width:24px;
    height:24px;
}
`