import styled from "styled-components";
import { backgroundColors, containerParams, neutralColors, titleSizes } from "../../../styledConstants";

export const SearchPanelWrap = styled.div`
position:absolute;
left:0;
top:0;
width:100%;
background:${backgroundColors.lightblack};
transition: all 0.5s;
z-index:3;
`

export const Container = styled.div`
max-width: ${containerParams.width};
margin: 0 auto;
padding: 30px ${containerParams.padding} 40px;
`

export const SearchInputWrap = styled.div`
position:relative;
width:100%
height:60px;
display:flex;
align-items:center;
gap:32px;
`

export const SearchInput = styled.input`
border:none;
font-size:${titleSizes.h2};
color:${neutralColors.white};
flex-grow:1;
`

export const CleanBtn = styled.button`
position:absolute;
top:0;
right:0;
`