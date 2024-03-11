import { useState } from "react"
import { DownArrow } from "../../../assets/icons/Arrows"
import { Tab } from "../../../store/navigation"
import { useAppSelector } from "../../../store/store"
import { StyledLinksListPanel, StyledBtnBack, StyledBtnBackText, StyledLinkSection, StyledLinkAll, StyledLinksWrap, StyledLink, StyledSemiLinksListPanel } from "./StyledMenu"

type SemiPanel = {
    links: Tab[],
    title: string,
    resetLinks: () => void,
    resetCategory: () => void
}

export const SemiLinksPanel = ({ links, title, resetLinks, resetCategory }: SemiPanel) => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const isRunlineClosed = useAppSelector((state) => state.runline.isClosed)

    return (<StyledSemiLinksListPanel $isMenuOpened={clickedTab === 'MenuPanel'} $hasLinks={links.length !== 0} $isRunlineClosed={isRunlineClosed}>
        <StyledBtnBack onClick={() => {
            resetCategory()
            resetLinks()
        }}>
            <DownArrow></DownArrow>
            <StyledBtnBackText>{title}</StyledBtnBackText>
        </StyledBtnBack>
        {links.map((link) => <StyledLinkAll key={link.title} to={link.path ? link.path : '/'}>{link.title}</StyledLinkAll>)}
        {/*{links.map((link) => <>
            <StyledLinkSection key={link.title}>{link.title[4].toUpperCase() + link.title.slice(5, link.title.length)}</StyledLinkSection>
            <StyledLinkAll to={link.path ? link.path : '/'}>All</StyledLinkAll>
            {link.linkSections?.map((link) =>
                <StyledLinksWrap key={link.title}>
                    <StyledLink>{link.title}</StyledLink>
                    <DownArrow></DownArrow>
                </StyledLinksWrap>
            )}
        </>)} */}
    </StyledSemiLinksListPanel>)
}