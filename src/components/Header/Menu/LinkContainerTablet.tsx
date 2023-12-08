import { useState } from "react";
import { DownArrow } from "../../../assets/icons/Arrows";
import { setClickedTab } from "../../../store/navigation";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { StyledCategoryName, StyledLinksCategory, StyledMenuLink } from "./StyledMenu"

type LinkProps = {
    path?: string;
    title: string;
    hasLinks: boolean;
}
export const LinkContainerTablet = ({ path, title, hasLinks }: LinkProps) => {
    const [isOpened, setisOpened] = useState(false)
    return (<>
        {!path && hasLinks && <StyledLinksCategory onClick={() => setisOpened(!isOpened)} $isClicked={isOpened}>
            <StyledCategoryName>{title}</StyledCategoryName>
            <DownArrow></DownArrow>
        </StyledLinksCategory>}
        {path && <StyledMenuLink to={path}>{title}</StyledMenuLink>}
    </>)
}