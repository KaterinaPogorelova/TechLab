import styled from "styled-components";
import { backgroundColor } from "../../../styledConstantsColors";

export const StyledCatalogue = styled.div<{ $isRunlineClosed: boolean }>`
  margin-top: ${props => props.$isRunlineClosed ? '82px' : '132px'};
  padding: 100px 0 120px 0;
  background: ${backgroundColor.white};

  @media (max-width: 1439.5px) {
  }

  @media (max-width: 1023.5px) {
  }

  @media (max-width: 767.5px) {
  }
`