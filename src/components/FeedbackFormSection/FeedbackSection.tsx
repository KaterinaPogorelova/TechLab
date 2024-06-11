import { StyledFrameHeader } from "../../styledConstants";
import {
  StyledFeedbackContainer,
  StyledFeedbackFormWrap,
  StyledFeedbackSection,
  StyledForm,
  StyledFormInfo,
  StyledFormText,
  StyledImgWrap,
  StyledSubmitBtn,
  StyledBgLineswrap,
  StyledLeftTopLine,
  StyledLeftBottomLine,
  StyledRightTopLine,
  StyledRightBottomLine,
} from "./StyledFeedbackSection";
import { FeedbackInput } from "./FeedbackInput";
import { Footer } from "./Footer";
import zeus from "../../assets/img/ManFeedbackPic.png";
import topleftline from "../../assets/img/feedbackLeftTopLine.svg";
import toprightline from "../../assets/img/feedbackRightTopLine.svg";
import bottomleftline from "../../assets/img/feedbackLeftBottomLine.svg";
import bottomrightline from "../../assets/img/feedbackRightBottomLine.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

export const FeedbackSection = () => {
  const { width = 0 } = useWindowSize();
  /*     const userEmail = useAppSelector((state) => state.feedback.userEmail)
        const userName = useAppSelector((state) => state.feedback.userName)
        const userMessage = useAppSelector((state) => state.feedback.userMessage) */

  return (
    <StyledFeedbackSection id="feedback">
      <StyledBgLineswrap>
        <StyledLeftTopLine src={topleftline} alt="topleftline" />
        <StyledLeftBottomLine src={bottomleftline} alt="bottomleftline" />
        <StyledRightTopLine src={toprightline} alt="toprightline" />
        <StyledRightBottomLine src={bottomrightline} alt="bottomrightline" />
      </StyledBgLineswrap>
      <StyledFeedbackContainer>
        <StyledFeedbackFormWrap>
          {width > 767 && (
            <StyledImgWrap>
              <img src={zeus} alt="zeus-feedback"></img>
            </StyledImgWrap>
          )}
          <StyledFormInfo>
            <StyledFrameHeader>
              More <span>questions?</span>
            </StyledFrameHeader>
            <StyledFormText $black={false}>
              Fill the form and we will answer you.
            </StyledFormText>
            {width < 768 && (
              <StyledImgWrap>
                <img src={zeus} alt="zeus-feedback"></img>
              </StyledImgWrap>
            )}
            <StyledForm
              id="form"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FeedbackInput
                id={"name"}
                type={"text"}
                name={"Name*"}
                placeholder={"Jack"}
                errorMessage={"Name is required"}
              ></FeedbackInput>
              <FeedbackInput
                id={"email"}
                type={"email"}
                name={"E-mail*"}
                placeholder={"you@example.com"}
                errorMessage={"Email is required"}
              ></FeedbackInput>
              <FeedbackInput
                id={"message"}
                name={"Your question*"}
                placeholder={"Write your question...."}
                errorMessage={"Message is required"}
              ></FeedbackInput>
              <StyledSubmitBtn type="submit" form="form" value="Submit">
                Send
              </StyledSubmitBtn>
            </StyledForm>
          </StyledFormInfo>
        </StyledFeedbackFormWrap>
      </StyledFeedbackContainer>
      <Footer></Footer>
    </StyledFeedbackSection>
  );
};
