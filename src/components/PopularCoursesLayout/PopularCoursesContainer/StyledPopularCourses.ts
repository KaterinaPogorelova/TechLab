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
`

export const StyledPopularCousreContainer = styled.div<{
  $horisontal?: boolean;
  $design?: boolean;
  $machine?: boolean;
}>`
  width: ${props => props.$horisontal ? "698px" : "498px"};
  border: 2px solid ${ props => props.$design ? colors.brand.violet : props.$machine ? colors.brand.orange : colors.brand.green};
  border-radius: 50px;
  padding: 26px 32px 30px;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    transform: translate(4px,-4px);
  }
`;
