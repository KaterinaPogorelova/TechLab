import React, { useState } from "react";
import {
  StyledAccordeonLearningItem,
  StyledAccordeonLerningTitle,
} from "./StyledLearningFormat";
import down from "../../../assets/icons/Chevron_Down.svg";
// import { backgroundColor } from "../../../styledConstantsColors";

interface AccordionItem {
  title: string;
  links: string[];
}

const LearningAccordeon: React.FC<{ item: AccordionItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledAccordeonLearningItem
      style={{
        backgroundColor: isOpen ? "white" : "",
      }}
    >
      <StyledAccordeonLerningTitle onClick={toggleAccordion}>
        <h3>{item.title}</h3>
        <button onClick={toggleAccordion}>
          <img
            src={down}
            alt="down_btn"
            className={isOpen ? "rotate" : ""}
          ></img>
        </button>
      </StyledAccordeonLerningTitle>
      {isOpen && (
        <ul>
          {item.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      )}
    </StyledAccordeonLearningItem>
  );
};

export default LearningAccordeon;
