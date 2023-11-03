import React, { useState } from "react";

import {
  StyledAccordeon,
} from "./StyledAccordeon";
import AccordeonItem from "./AccordeonItem";

export const accordeonData = [
  { title: "Строка 1", content: "Содержимое строки 1" },
  { title: "Строка 2", content: "Содержимое строки 2" },
  { title: "Строка 3", content: "Содержимое строки 3" },
];

const Accordeon = ({isBlack}: {isBlack: boolean}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <StyledAccordeon>
      {accordeonData.map((panel, index) => (
        <AccordeonItem isBlack={isBlack}
          key={index}
          isOpen={activeIndex === index}
          onClick={() =>
            activeIndex === index ? setActiveIndex(null) : setActiveIndex(index)
          }
          panel={panel}
        />
      ))}
    </StyledAccordeon>
  );
};

export default Accordeon;
