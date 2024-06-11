import { StyledFrameHeader } from "../../../styledConstants";
import { FeedbackInput } from "../../FeedbackFormSection/FeedbackInput";
import {
  StyledFormText,
  StyledSubmitBtn,
} from "../../FeedbackFormSection/StyledFeedbackSection";
import { FooterApart } from "../../PageMentors/FooterApart/FooterApart";
import {
  StyledFeedbackCourseSection,
  StyledFeedbackCourseContainer,
  StyledFormCourse,
} from "./StyledFeedbackCourse";

export const FeedbackCourse = () => {
  return (
    <StyledFeedbackCourseSection>
      <StyledFeedbackCourseContainer>
        <StyledFrameHeader>Not sure? Need advice?</StyledFrameHeader>
        <StyledFormText $black={false}>
          If you're unsure about the most suitable course format for you, you
          can seek assistance from our consultants.
        </StyledFormText>
        <StyledFormCourse
          id="feedback-course-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <FeedbackInput
            id={"name-course"}
            type={"text"}
            name={"Name*"}
            placeholder={"Jack"}
            errorMessage={"Name is required"}
          ></FeedbackInput>
          <FeedbackInput
            id="phone"
            type={"text"}
            name={"Phone"}
            placeholder={"+372 546373"}
            errorMessage="Phone is required"
          />
          <StyledSubmitBtn type="submit" form="form" value="Submit">
            Get consultation
          </StyledSubmitBtn>
        </StyledFormCourse>
      </StyledFeedbackCourseContainer>
      <FooterApart />
    </StyledFeedbackCourseSection>
  );
};
