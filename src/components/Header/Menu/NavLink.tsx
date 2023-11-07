import { useAppDispatch, useAppSelector } from "../../../store/store"
import { setClickedTab } from "../../../store/navigation"

import { StyledLinkContainer, StyledLinkMain, StyledLinkWrap } from "./StyledMenu"
import { DownArrow } from "../../../assets/icons/Arrows"




type NavLinkProps = {
    path?: string;
    title: string;
}

export const NavLink = ({ path, title }: NavLinkProps) => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const dispatch = useAppDispatch()

    return (<StyledLinkWrap onClick={() => {
        if (clickedTab === title) {
            dispatch(setClickedTab(''))
        } else {
            dispatch(setClickedTab(title))
        }
    }}>
        {path && <StyledLinkMain to={path}>{title}</StyledLinkMain>}
        {!path && <StyledLinkContainer $clickedTab={clickedTab} $title={title}>{title}</StyledLinkContainer>}
        {!path && <DownArrow isClicked={clickedTab === title}></DownArrow>}
    </StyledLinkWrap>)
}
