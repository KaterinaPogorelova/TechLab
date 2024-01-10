import styled from "styled-components";
import bg from '../../assets/icons/BG.svg'

export const StyledPopular = styled.div<{ $isSoon?: boolean }>`
width: 100%;
padding: 100px 0 120px;
border-radius: 0px 0px 80px 80px;
background: #FFF;
background-image: url(${props => props.$isSoon ? bg : ''});
background-repeat: no-repeat;
background-position-x: 130%;
background-position-y: -100px;
@media (max-width: 1440px){
  padding: 80px 0 100px;
}
@media (max-width: 1023.5px){
  border-radius: 0px;
  padding: 60px 0 80px;
}
@media (max-width: 767.5px){
  padding: 50px 0 70px;
}
`