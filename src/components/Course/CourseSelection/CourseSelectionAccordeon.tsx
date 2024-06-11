import { useState } from "react";

interface AccordeonItem {
  title: string;
}
const CourseSelectionAccordeon: React.FC<{ item: AccordeonItem }> = ({
  item,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return <div></div>;
};
export default CourseSelectionAccordeon;
