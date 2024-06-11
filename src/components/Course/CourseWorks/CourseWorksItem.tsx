import {
  StyledWorksItemContainer,
  StyledWorksItemTitle,
  StyledWorksItemText,
} from "./StyledCourseWorks";
type WorksItemType = {
  item: number;
  title: string;
  text: string;
};
export const CourseWorksItem = ({ item, title, text }: WorksItemType) => {
  return (
    <StyledWorksItemContainer>
      <StyledWorksItemTitle>
        <span>{item}</span>
        {title}
      </StyledWorksItemTitle>
      <StyledWorksItemText>{text}</StyledWorksItemText>
    </StyledWorksItemContainer>
  );
};
