import styled from "styled-components";
import { StyledFrameText } from "../../styledConstants";
import { backgroundColor } from "../../styledConstantsColors";

export const StyledQuestions = styled.div`
width: 100%;
padding: 100px 0px 120px 0px;
border-radius: 0px 0px 80px 80px;
background: ${backgroundColor.champagne};
`

export const StyledQuestionsText = styled(StyledFrameText)` // расширение стиля
  width: 1043px;
`