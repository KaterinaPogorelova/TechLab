import React from "react";
import { StyledContent, StyledFrameHeader } from "../../styledConstants";
import Accordeon from "../Accordeon/Accordeon";
import { StyledQuestions, StyledQuestionsText } from "./styledQuestions";

const QuestionsLayout = () => {
  return (
    <StyledQuestions>
      <StyledContent>
        <div>
          <StyledFrameHeader>
            Have a <span>question?</span> We have an answer.
          </StyledFrameHeader>
          <StyledQuestionsText $black>
            If you didn't find the answer to your question, you can contact us
            through the <a href="якорь">feedback form</a>, and we will respond within 24 hours.
          </StyledQuestionsText>
        </div>
        <Accordeon isBlack={true} />
      </StyledContent>
    </StyledQuestions>
  );
};

export default QuestionsLayout;
