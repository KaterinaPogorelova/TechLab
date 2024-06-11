import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  StyledContainer,
  StyledFrameHeader,
  StyledSectionSeparator,
} from "../../../styledConstants";
import { colors } from "../../../styledConstantsColors";
import Accordeon from "../../Accordeon/Accordeon";
import { StyledCoursefaq } from "./StyledCoursefaq";

const ourAccordeonDataFaq = [
  {
    title: "What level of computer proficiency is required for the course?",
    content:
      "Sufficiently basic computer skills are required. Design skills are not necessary; our program starts from scratch and progresses to a PRO level.",
  },
  {
    title:
      "I'm concerned about my English skills. Will I be able to keep up with the course?",
    content:
      "Knowledge of English is necessary, but full proficiency isn’t crucial – as long as you can understand and communicate with your peers and instructors, you’ll be fine! Regardless, our team are dedicated to offering you as much support as they can, and will give you additional help when needed.",
  },
  {
    title: "What is needed for the sessions?",
    content:
      "You can watch theoretical lectures on any device — laptop, home computer, tablet, or smartphone. For practical lessons, you will need a laptop or computer running Windows or MacOS.",
  },
  {
    title: "Can you guarantee a job with a company in the industry?",
    content:
      "We’d love to guarantee a job after the course, but it’s ultimately up to you to apply for various positions. We can help with application reviews and portfolio building, and we can provide ongoing support. It’s crucial to keep adding projects to your portfolio after the course to be well-prepared for your job search.",
  },
];

export const Coursefaq = () => {
  const { width = 0 } = useWindowSize();
  return (
    <>
      <StyledCoursefaq>
        <StyledContainer>
          <StyledFrameHeader>
            Do you have any <span>questions? </span>
          </StyledFrameHeader>
          <Accordeon accordeonData={ourAccordeonDataFaq} isBlack={true} />
        </StyledContainer>
      </StyledCoursefaq>
      {width > 1023 && (
        <StyledSectionSeparator
          $background={colors.neutral.white}
        ></StyledSectionSeparator>
      )}
    </>
  );
};
