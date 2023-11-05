import { useAppSelector } from "../../../store/store"

import { Container, Wrapper, LinkSection, SectionTitle } from "./StyledLinkesWrap"

export const LinksWrap = () => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const tab = useAppSelector((state) => state.nav.tabs.find((tab) => tab.title === clickedTab))

    return (<Wrapper $linkSections={tab?.linkSections}>
        <Container>
            {tab && tab.linkSections && tab.linkSections.map((link) =>
                <div><LinkSection>{link}</LinkSection><SectionTitle to={'/'}>Заглушка</SectionTitle></div>)}
        </Container>
    </Wrapper>)
}