import styled from "styled-components";
import { colors, typographyColor } from "../../../styledConstantsColors";
import checkmarkViolet from "../../../assets/icons/checkmarkViolet.svg"

export const StyledFiltersBlock = styled.div`
  margin: 62px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`

export const StyledFiltersHeadBlock = styled.div<{ $isFiltersOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  & h3 {
    color: ${props => props.$isFiltersOpen ? typographyColor.lightBG.violet : 'inherit'};
  }

  &:hover h3 {
    color: ${typographyColor.lightBG.violet};
  }

  & svg {
    width: 20px;
    height: 16px;
  }

  & path {
    stroke: ${props => props.$isFiltersOpen ?
      typographyColor.lightBG.violet :
      typographyColor.lightBG.black};
    transition: stroke 0.4s ease-in-out;
  }

  &:hover path {
    stroke: ${typographyColor.lightBG.violet};
  }
`

export const StyledIconFilters = styled.object`
  width: 20px;
  height: 16px;
`

export const StyledFiltersHead = styled.h3`
  display: inline-block;
  color: ${typographyColor.lightBG.black};
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
  transition: color 0.4s ease-in-out;
`

export const StyledFiltersMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`

export const StyledFiltersCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

export const StyledFilterCategoryName = styled.h3`
  color: ${colors.neutral.darkBlack}
  font-family: Raleway;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 150% */
  letter-spacing: 0.4px;
`

export const StyledFiltersList = styled.div`
  display: flex;
  width: 288px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

export const StyledListItem = styled.div`
  display: flex;
  width: 288px;
  align-items: center;
  gap: 6px;
`

export const StyledFilterLabel = styled.label`
  color: ${colors.neutral.darkBlack}
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.32px;
`

export const StyledFilterCheckbox = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 2px solid ${colors.brand.violet};
  background: ${colors.neutral.white};

  &:checked {
    background: ${colors.brand.violet};
  }

  &:checked::before {
    content: url(${checkmarkViolet});
    position: relative;
    width: 14px;
    height: 10px;
    flex-shrink: 0;
    left: 1px;
    bottom: 2px;
  }
`