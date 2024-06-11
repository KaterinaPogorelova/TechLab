import CourseSelectionAccordeon from "./CourseSelectionAccordeon";
import { StyledSelectionItemContainer } from "./StyledCourseSelection";
interface AccordeonItem {
  title: string;
  text: string;
  selectCourse: string;
  lessons: string[];
  isChecked: boolean;
}
interface SelectListProps {
  items: AccordeonItem[];
}

const CourseSelectionList: React.FC<SelectListProps> = ({ items }) => {
  return (
    <StyledSelectionItemContainer>
      {items.map((item, index) => (
        <CourseSelectionAccordeon key={index} item={item} />
      ))}
    </StyledSelectionItemContainer>
  );
};
export default CourseSelectionList;
