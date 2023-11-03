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
  isBlack: boolean;
}
const AccordeonItem = ({ panel, onClick, isOpen, isBlack }: IAccordeonItem) => {
  const itemRef = useRef<HTMLLIElement | null>(null);

  return (
    <div>
      <StyledAccordeonPanel $isOpen={isOpen} onClick={onClick} $blackAcc={isBlack}>
        <div>
          <h3>{panel.title}</h3>
          <button>
            <img src={plus} alt="close_btn" />
          </button>
        </div>
      </StyledAccordeonPanel>
      <StyledAccordeonCollapse $blackAcc={isBlack}
        $isOpen={isOpen}
        style={
          isOpen ? { height: itemRef.current?.scrollHeight } : { height: "0px" }
        }
      >
        <StyledAccordeonContent ref={itemRef} $blackAcc={isBlack}>
          {panel.content}
        </StyledAccordeonContent>
      </StyledAccordeonCollapse>
    </div>
  );
};

export default AccordeonItem;
