import {
  StyledContainer,
  StyledFrameHeader,
  StyledFrameText,
} from "../../../styledConstants";
import {
  StyledCourseTeachers,
  StyledCourseTeachersContainer,
  StyledCourseTeachersText,
  StyledCourseTeachersCards,
  StyledCourseTeachersCardsContainerButton,
  StyledCourseTeachersCardsButton,
} from "./StyledCourseTeachers";
import ArrowRight from "../../../assets/icons/ArrowLineRight.svg";
import { experts, Iexpert } from "../../OurExperts/experts";
import { CourseTeachersCard } from "./CourseTeacherCard";

const TeachersList: Iexpert[] = [...experts];

export const CourseTeachers = () => {
  return (
    <StyledCourseTeachers>
      <StyledContainer>
        <StyledCourseTeachersContainer>
          <StyledFrameHeader>
            Meet <span>your team</span>
          </StyledFrameHeader>
          <StyledFrameText $black>
            Get to know the course instructors.
          </StyledFrameText>
          <StyledCourseTeachersText>
            On the Mentors page, you can purchase a consultation with each of
            our mentors.
          </StyledCourseTeachersText>
        </StyledCourseTeachersContainer>
        <StyledCourseTeachersCards>
          {TeachersList.map((expert, index) => {
            if (expert.course === "Design") {
              return (
                <CourseTeachersCard
                  key={index}
                  name={expert.name}
                  desc={expert.desc}
                  experience={expert.experience}
                  expItems={expert.expItems}
                  image={expert.src}
                />
              );
            }
            return null;
          })}
        </StyledCourseTeachersCards>
        <StyledCourseTeachersCardsContainerButton>
          <StyledCourseTeachersCardsButton>
            Go to the mentors' page <img src={ArrowRight} alt="arrow"></img>
          </StyledCourseTeachersCardsButton>
        </StyledCourseTeachersCardsContainerButton>
      </StyledContainer>
    </StyledCourseTeachers>
  );
};
