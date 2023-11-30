import styled from "styled-components";
import bg from '../../assets/icons/BG.svg'

export const StyledPopular = styled.div<{ $isSoon?: boolean }>`
width: 100%;
padding: 120px 0 120px;
border-radius: 0px 0px 80px 80px;
background: #FFF;
background-image: url(${ props => props.$isSoon ? bg : ''});
background-repeat: no-repeat;
background-position-x: 130%;
background-position-y: -100px;

`