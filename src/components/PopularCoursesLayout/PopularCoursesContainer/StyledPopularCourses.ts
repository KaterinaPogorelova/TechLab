import styled from "styled-components";
import { StyledFlex } from "../../../styledConstants";
import { colors } from "../../../styledConstantsColors";

export const StyledPopularContainer = styled(StyledFlex)`
  gap: 20px;
  padding: 10px;
`;

export const StyledPopularHorizontalContainer = styled(StyledFlex)`
  flex-direction: column;
  gap: 20px;
  @media(max-width: 1439.5px) {
    flex-direction: row;
  }
`

export const StyledCardHorizontalContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
gap: 20px;
width: 100%;
flex-grow: 1;
@media(max-width:1023.5px){
  gap: 14px;
}
@media(max-width:767.5px){
  gap: 20px;
}
@media(max-width:479.5px){
  gap: 10px;
}
`

export const StyledPopularCousreContainer = styled.div<{
  $horisontal?: boolean;
  $design?: boolean;
  $machine?: boolean;
}>`
  max-width: ${props => props.$horisontal ? "698px" : "498px"};
  border: 2px solid ${props => props.$design ? colors.brand.violet : props.$machine ? colors.brand.orange : colors.brand.green};
  border-radius: 50px;
  padding: 26px 32px 30px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    transform: translate(4px,-4px);
  }
  @media(max-width:1439.5px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    min-height: 360px;
    padding: 8px 24px 20px;
    margin: auto;
     border-radius: 40px;
  }
  @media(max-width:1023.5px){
    max-width: 348px;
    min-height: 404px;
    border-radius: 20px;
    margin:0;
    padding: 18px 22px 30px;
  }
   @media(max-width:767.5px){
    max-width: 400px;
    min-height: 398px;
    padding: 20px 20px 24px;
    border-radius: 40px;
  }
     @media(max-width:479.5px){
    max-width: 320px;
    min-height: 430px;
    padding: 30px 24px;
  }

`;
