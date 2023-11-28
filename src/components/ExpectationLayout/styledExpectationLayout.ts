import styled from "styled-components";
import { backgroundColor, typographyColor, typographyGradient } from "../../styledConstantsColors";

export const StyledExpectation = styled.div`
position:relative;
  width: 100%;
  padding: 180px 0 120px;
  /* padding: 180px 251px 120px 251px; - паддинги из макета */ 
  border-radius: 0px 0px 80px 80px;
  background: ${backgroundColor.black};
`;

export const StyledExpectationText = styled.p`
   max-width: 413px;
    margin: 30px 20px auto auto;
    padding-right: 30px;
    color: ${typographyColor.darkBG.white};
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
`

export const StyledH2 = styled.h2`
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 50px;
  background: ${typographyGradient.G3};
  -webkit-background-clip: text;
  color: transparent;
`;

