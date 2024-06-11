import React from "react";
import {
  StyledPopularContainer,
  StyledPopularCousreContainer,
  StyledPopularHorizontalContainer,
} from "./StyledPopularCourses";
import PopularCard from "./PopularCard/PopularCard";
import card_pic_design from "../../../assets/images/CardPictureDesign.svg";
import card_pic_machine from "../../../assets/images/CardPictureMachine.svg";
import card_pic_language from "../../../assets/images/CardPictureLanguage.svg";

const PopularCourses = () => {
  return (
    <StyledPopularContainer>
      <StyledPopularHorizontalContainer>
        <StyledPopularCousreContainer $horisontal $design>
          <PopularCard
            header="UX/UI design"
            countLessons={150}
            type="Design"
            description="Even the best application is bound to fail if you don’t pay attention to its UX and UI design."
            imageSrc={card_pic_design}
            // path="/course"
          />
        </StyledPopularCousreContainer>
        <StyledPopularCousreContainer $horisontal $machine>
          <PopularCard
            header="Machine learning"
            countLessons={150}
            type="Data Science"
            description="Learn different model selection and feature selections techniques in machine learning."
            imageSrc={card_pic_machine}
            // path="/"
          />
        </StyledPopularCousreContainer>
      </StyledPopularHorizontalContainer>
      <StyledPopularCousreContainer>
        <PopularCard
          isVertical
          header="Java"
          countLessons={150}
          type="Programming"
          description="Most desired by employers and most widespread among developers. Java is at the heart of the tech industry, from large enterprise solutions to cutting-edge Internet of Things applications. 
        Take this course to build a strong foundation for starting a new career as a Java developer."
          imageSrc={card_pic_language}
          // path="/"
        />
      </StyledPopularCousreContainer>
    </StyledPopularContainer>
  );
};

export default PopularCourses;
