import {
  StyledContainer,
  StyledSectionSeparator,
} from "../../../styledConstants";
import {
  StyledCourseWorks,
  StyledCourseWorksContainer,
  StyledWorksTitle,
  StyledImgWrap,
  StyledHowWorks,
  StyledButtonContainer,
  StyledWorksListContainer,
  StyledButton,
} from "./StyledCourseWorks";
import image from "../../../assets/img/whiteStoneStatueOfThinkingZeus.png";
import { useState } from "react";
import { CourseWorksItem } from "./CourseWorksItem";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { colors } from "../../../styledConstantsColors";
import { SelectGroup } from "./SelectGroup";

const words = ["Group", "Self-paced", "Customize the course"];
const worksList = [
  [
    {
      title: "The training is online",
      text: "Student studies video lessons on the GetCourse platform.\nEach week, a group session is conducted through live streaming on ZOOM",
    },
    {
      title: "Course structure",
      text: "The training is divided into modules, with lessons in each module.\nAfter each lesson, the student takes a test and gains access to the next lesson",
    },
    {
      title: "Modules",
      text: "Each training module lasts for two weeks, and at the end of each module, a homework assignment is submitted.",
    },
    {
      title: "Asigments",
      text: "The curator reviews and provides feedback.\nAfter making corrections, the student moves on to the next module",
    },
    {
      title: "Portfolio",
      text: "At the end of the course, you create your own resume, portfolio, and cover letter, sending them for evaluation by the instructor",
    },
    {
      title: "Obtaining a diploma",
      text: "After successfully completing all modules, a diploma project is written and submitted",
    },
  ],
  [
    {
      title: "The training is online",
      text: "Student studies video lessons on the GetCourse platform.",
    },
    {
      title: "Course structure",
      text: "The training is divided into modules, with lessons in each module.\nAfter each lesson, the student takes a test and gains access to the next lesson",
    },
    {
      title: "Modules",
      text: "The recommended completion time for each module is no faster than two weeks.\nCourse result\nUpon completion of all assignments, you will have a starting portfolio with 12 projects.",
    },
    {
      title: "Course plan upgrade",
      text: "If you wish, you can always purchase a consultation from our mentors or upgrade your plan to a group format.",
    },
  ],
  [
    {
      title: "Unit selection",
      text: "Students choose courses with the themes that are relevant to them",
    },
    {
      title: "The training is online",
      text: "Student studies video lessons on the GetCourse platform.",
    },
    {
      title: "Course structure",
      text: "The training is divided into modules, with lessons in each module.\nAfter each lesson, the student takes a test and gains access to the next lesson.",
    },
    {
      title: "Modules",
      text: "The recommended completion time for each module is no faster than two weeks.",
    },
  ],
];
export const CourseWorks = () => {
  const { width = 0 } = useWindowSize();
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <StyledCourseWorks>
        <StyledContainer>
          <StyledCourseWorksContainer>
            <StyledWorksTitle>
              <h3>How it works?</h3>
              <StyledHowWorks>
                <SelectGroup
                  words={words}
                  goToIndex={goToIndex}
                  activeIndex={currentIndex}
                />
                {/* <StyledButtonContainer>
                  {words.map((word, index) => (
                    <StyledButton
                      key={index}
                      onClick={() => goToIndex(index)}
                      active={currentIndex === index}
                    >
                      {word}
                    </StyledButton>
                  ))}
                </StyledButtonContainer> */}
                <StyledWorksListContainer>
                  {worksList[currentIndex].map((element, index) => (
                    <CourseWorksItem
                      key={index}
                      title={element.title}
                      text={element.text}
                      item={index + 1}
                    />
                  ))}
                </StyledWorksListContainer>
              </StyledHowWorks>
            </StyledWorksTitle>
            <StyledImgWrap>
              <img src={image} alt="statue"></img>
            </StyledImgWrap>
          </StyledCourseWorksContainer>
        </StyledContainer>
      </StyledCourseWorks>
      {width > 1023 && (
        <StyledSectionSeparator
          $background={colors.neutral.darkBlack}
        ></StyledSectionSeparator>
      )}
    </>
  );
};
