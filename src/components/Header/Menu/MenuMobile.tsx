import { useAppSelector } from "../../../store/store"

import { StyledSignUpLink, StyledMobMenuWrap, StyledLogInLink, StyledLinkText, StyledHelp, StyledQuestion, StyledLinksListPanel, StyledBtnBack, StyledBtnBackText, StyledLinkSection, StyledLink, StyledLinksWrap, StyledLinkAll } from "./StyledMenu"
import { ReactComponent as UserIcon } from '../../../assets/icons/UserIcon.svg'
import { LinkContainerTablet } from "./LinkContainerTablet"
import { LinkContainerMobile } from "./LinkContainerMobile"
import { useState } from "react"
import { Tab } from "../../../store/navigation"
import { title } from "process"
import { DownArrow } from "../../../assets/icons/Arrows"
import { SemiLinksPanel } from "./SemiLinksPanel"

export const MenuMobile = () => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const tabs = useAppSelector((state) => state.nav.tabs)
    const isRunlineClosed = useAppSelector((state) => state.runline.isClosed)

    const [categoryClicked, setCategoryClicked] = useState('')
    const [links, setLinks] = useState<Tab[]>([])
    const [semiPanelClicked, setSemiPanelClicked] = useState('')
    const [semiLinks, setSemiLinks] = useState<Tab[]>([])

    return (<><StyledMobMenuWrap $isClicked={clickedTab === 'MenuPanel'} $isRunlineClosed={isRunlineClosed}>
        {tabs.map((tab) =>
            <LinkContainerMobile key={tab.title} title={tab.title} path={tab.path ? tab.path : undefined} links={tab.linkSections ? tab.linkSections : undefined}
                changeCategoryLinks={(title: string) => setCategoryClicked(title)} setCategoryLinks={(links) => setLinks(links)}></LinkContainerMobile>)}
        <LinkContainerMobile title="Career test" isTest path="/"></LinkContainerMobile>
        <StyledQuestion>Do you have an account?</StyledQuestion>
        <StyledLogInLink to='/'>Log In</StyledLogInLink>
        <StyledQuestion>Is this your first visit?</StyledQuestion>
        <StyledSignUpLink to='/'>Sign Up</StyledSignUpLink>
    </StyledMobMenuWrap >
        <StyledLinksListPanel $isMenuOpened={clickedTab === 'MenuPanel'} $hasLinks={links.length !== 0}>
            <StyledBtnBack onClick={() => {
                setCategoryClicked('')
                setLinks([])
            }}>
                <DownArrow></DownArrow>
                <StyledBtnBackText>{categoryClicked}</StyledBtnBackText>
            </StyledBtnBack>
            {links.map((link) => <div key={link.title}>
                <StyledLinkSection>{link.title[4].toUpperCase() + link.title.slice(5, link.title.length)}</StyledLinkSection>
                <StyledLinkAll to={link.path ? link.path : '/'}>All</StyledLinkAll>
                {link.linkSections?.map((link) =>
                    <StyledLinksWrap key={link.title} onClick={() => {
                        setSemiPanelClicked(link.title)
                        link.linkSections && setSemiLinks(link.linkSections)
                    }}>
                        <StyledLink >{link.title}</StyledLink>
                        <DownArrow></DownArrow>
                    </StyledLinksWrap>
                )}
            </div>)}
        </StyledLinksListPanel>
        {semiPanelClicked !== '' &&
            <SemiLinksPanel title={semiPanelClicked} links={semiLinks} resetCategory={() => setSemiPanelClicked('')} resetLinks={() => setSemiLinks([])}></SemiLinksPanel>}
    </>)
}