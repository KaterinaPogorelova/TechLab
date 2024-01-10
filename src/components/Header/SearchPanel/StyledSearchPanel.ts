import styled from "styled-components";

import { StyledContainer } from "../../../styledConstants";
import { backgroundColor, colors } from "../../../styledConstantsColors";

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
padding: 30px 0 70px;

@media(max-width:1439.5px){
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(73px)' : 'translateY(0px)'};
}

@media(max-width:1023.5px){
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(71px)' : 'translateY(0px)'};
}
@media(max-width:767.5px){
    height:100vh;
    transform:${props => props.$activeTab === 'SearchPanel' ? 'translateY(55px)' : 'translateY(0px)'};
}
`

export const StyledContainerSearch = styled(StyledContainer)`
margin: 0 auto;
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
font-size: 32px;
font-weight: 400;
line-height: 40px;
color:${colors.neutral.white};
flex-grow:1;

@media(max-width:1439.5px){
    font-size:20px;
}
&:-webkit-autofill,
&:-webkit-autofill:hover, 
&:-webkit-autofill:focus, 
&:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
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

export const StyledSearchSuggestions = styled.div`
margin-top:22px;
`
export const StyledSuggestionsTitle = styled.h5`
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0.32px;
color:${colors.neutral.darkGray};
@media(max-width:1439.5px){
    font-size: 14px;
}
@media(max-width:767.5px){
    font-size: 16px;
}
`

export const StyledSuggestionContainer = styled.div`
margin-top:22px;
display:flex;
align-items:center;
gap:27px;
& svg{
    width:24px;
    height:24px;
    fill:${colors.neutral.darkGray};
}
@media(max-width:767.5px){
    gap:10px;
}
`

export const StyledSuggestion = styled.p`
font-size: 16px;
font-weight: 400;
letter-spacing: 0.32px;
color:${colors.neutral.darkGray};
@media(max-width:1439.5px){
    font-size: 14px;
}
@media(max-width:767.5px){
    font-size: 16px;
}
`