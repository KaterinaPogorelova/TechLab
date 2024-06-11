import React from "react";
import { StyledFilterCheckbox, StyledFilterLabel, StyledListItem } from "./styledFiltersItems";

interface ListItemProps {
  item: string,
  isChecked: boolean,
  handlerToggleChecked: any
}

export const ListItem: React.FC<ListItemProps> = ({item, isChecked, handlerToggleChecked}) => {

  return (
    <StyledListItem>
      <StyledFilterCheckbox
        id={item}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => {
          handlerToggleChecked(item)
        }}
      />
      <StyledFilterLabel htmlFor={item}>{item}</StyledFilterLabel>
    </StyledListItem>
  );
}