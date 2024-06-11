import { useAppDispatch, useAppSelector } from "../../../store/store"
import { setClickedTab } from "../../../store/navigation"
import { StyledHeadLinks, StyledLinkContainer, StyledLinkMain, StyledLinkWrap } from "./StyledMenu"
import { DownArrow } from "../../../assets/icons/Arrows"
import { LinksWrap } from "../LinksWrap/LinksWrap"
import { useNavigate } from "react-router-dom";

type NavLinkProps = {
  path?: string;
  title: string;
  hasLinks: boolean;
}

export const NavLink = ({path, title, hasLinks}: NavLinkProps) => {
  const clickedTab = useAppSelector((state) => state.nav.clickedTab)
  const dispatch = useAppDispatch()
  const navigate = useNavigate();

  const openMenu = () => {
    if (clickedTab === title) {
      dispatch(setClickedTab(''))
    } else {
      dispatch(setClickedTab(title))
    }
  }

  return (
    <>
      <StyledLinkWrap>
        {!hasLinks && path && <StyledLinkMain to={path}>{title}</StyledLinkMain>}
        {hasLinks &&
          <StyledLinkContainer $clickedTab={clickedTab}
                               $title={title}>
            <StyledHeadLinks to={path as string}>{title}</StyledHeadLinks>
          </StyledLinkContainer>}
        {hasLinks && <div onClick={openMenu}><DownArrow isClicked={clickedTab === title} /></div>}
      </StyledLinkWrap>
      {hasLinks && <LinksWrap isClicked={clickedTab === title} />}
    </>
  )
}
