import { useState } from "react";
import { DownArrow } from "../../../assets/icons/Arrows";
import { setClickedTab } from "../../../store/navigation";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { StyledCategoryName, StyledLinksCategory, StyledLinksCategoryMob, StyledMenuLink, StyledMenuLinkMob } from "./StyledMenu"
import { Tab } from "../../../store/navigation";
type LinkProps = {
    path?: string;
    title: string;
    links?: Tab[];
    isTest?: boolean;
    changeCategoryLinks?: (title: string) => void;
    setCategoryLinks?: (links: Tab[]) => void;
}
export const LinkContainerMobile = ({ path, title, links, isTest, changeCategoryLinks, setCategoryLinks }: LinkProps) => {
    return (<>
        {!path && links && <StyledLinksCategoryMob onClick={() => {
            changeCategoryLinks && changeCategoryLinks(title)
            setCategoryLinks && setCategoryLinks(links)
        }}>
            <StyledCategoryName>{title}</StyledCategoryName>
            <DownArrow></DownArrow>
        </StyledLinksCategoryMob>}
        {path && <StyledMenuLinkMob $isTest={isTest} to={path}>{title}</StyledMenuLinkMob>}
    </>)
}