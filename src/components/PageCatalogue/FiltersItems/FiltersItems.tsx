import React from "react";
import {
  StyledFilterCategoryName, StyledFiltersBlock, StyledFiltersCategory,
  StyledFiltersHead, StyledFiltersHeadBlock, StyledFiltersList, StyledFiltersMenu,
} from "./styledFiltersItems";
import { ListItem } from "./ListItem";
import { dataActions } from "../../../data/dataActions";
import type { Ifilter } from "../../../data/dataActions";
import { ReactComponent as FiltersIcon } from "../../../assets/icons/filtersIcon.svg";

type toggleFunction = () => void;

interface FiltersCardsProps {
  toggleFilterMenu: toggleFunction,
  isFiltersOpen: boolean,
  checkedItems: string[],
  handlerToggleChecked: any
}

export const FiltersItems: React.FC<FiltersCardsProps> = (
  {
    toggleFilterMenu,
    isFiltersOpen,
    checkedItems,
    handlerToggleChecked
  }) => {

  return (
    <StyledFiltersBlock>
      <StyledFiltersHeadBlock onClick={toggleFilterMenu} $isFiltersOpen={isFiltersOpen}>
        <FiltersIcon />
        <StyledFiltersHead>Filters</StyledFiltersHead>
      </StyledFiltersHeadBlock>
      {
        isFiltersOpen &&
        <StyledFiltersMenu>
          {
            dataActions.map((filter: Ifilter, index: number) =>
              <StyledFiltersCategory key={index}>
                <StyledFilterCategoryName>{filter.name}</StyledFilterCategoryName>
                <StyledFiltersList>
                  {
                    filter.items.map((item: string, i: number) =>
                      <ListItem
                        key={i}
                        item={item}
                        isChecked={checkedItems.includes(item)}
                        handlerToggleChecked={handlerToggleChecked}
                      />
                    )
                  }
                </StyledFiltersList>
              </StyledFiltersCategory>
            )
          }
        </StyledFiltersMenu>
      }
    </StyledFiltersBlock>
  );
}