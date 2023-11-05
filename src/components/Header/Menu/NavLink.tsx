import { useAppDispatch, useAppSelector } from "../../../store/store";
import { LinkContainer, LinkMain, LinkWrap } from "./StyledMenu"
import { DownArrow } from "../../../assets/img/Arrows"
import { activeColors } from "../../../styledConstants";
import { setClickedTab } from "../../../store/navigation";


type NavLinkProps = {
    path?: string;
    title: string;
}

export const NavLink = ({ path, title }: NavLinkProps) => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const dispatch = useAppDispatch()

    return (<LinkWrap onClick={() => {
        if (clickedTab === title) {
            dispatch(setClickedTab(''))
        } else {
            dispatch(setClickedTab(title))
        }
    }}>
        {path && <LinkMain to={path}>{title}</LinkMain>}
        {!path && <LinkContainer style={clickedTab === title ? { color: activeColors.green } : {}}>{title}</LinkContainer>}
        {!path && <DownArrow isClicked={clickedTab === title}></DownArrow>}
    </LinkWrap>)
}
