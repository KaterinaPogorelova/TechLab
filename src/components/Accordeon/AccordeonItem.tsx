import React, { useRef } from "react";
import {
  StyledAccordeonCollapse,
  StyledAccordeonContent,
  StyledAccordeonPanel,
} from "./StyledAccordeon";
import plus from "../../assets/icons/plus.svg";

export interface IAccordeonItem {
  panel: {
    title: string;
    content: string;
  };
  onClick: () => void;
  isOpen: boolean;
}
const AccordeonItem = ({ panel, onClick, isOpen }: IAccordeonItem) => {
  const itemRef = useRef<HTMLLIElement | null>(null);

  return (
    <li onClick={onClick}>
      <StyledAccordeonPanel $isOpen={isOpen}>
        <div>
          <h3>{panel.title}</h3>
          <button>
            <img src={plus} alt="close_btn" />
          </button>
        </div>
      </StyledAccordeonPanel>
      <StyledAccordeonCollapse
        $isOpen={isOpen}
        style={
          isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
        }
      >
        <StyledAccordeonContent ref={itemRef}>
          {panel.content}
        </StyledAccordeonContent>
      </StyledAccordeonCollapse>
    </li>
  );
};

export default AccordeonItem;
