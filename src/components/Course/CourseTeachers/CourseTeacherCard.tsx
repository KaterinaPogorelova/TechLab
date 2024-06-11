import {
  StyledCourseTeachersCardContainer,
  StyledCourseTeacherCardImage,
  StyledCourseTeacherCardTitle,
} from "./StyledCourseTeachers";
import linkIn from "../../../assets/icons/LinkToin.svg";

type ExpertCourseCard = {
  name: string;
  desc: string;
  experience: string;
  expItems: string;
  image: string;
};

export const CourseTeachersCard = ({
  name,
  desc,
  experience,
  expItems,
  image,
}: ExpertCourseCard) => {
  return (
    <StyledCourseTeachersCardContainer>
      <StyledCourseTeacherCardImage>
        <img src={image} alt="expert" />
        <img src={linkIn} alt="link to in" />
      </StyledCourseTeacherCardImage>
      <StyledCourseTeacherCardTitle>
        <span>{name}</span>
        <span>{desc}</span>
        <span>{experience}</span>
        <span>{expItems}</span>
      </StyledCourseTeacherCardTitle>
    </StyledCourseTeachersCardContainer>
  );
};
