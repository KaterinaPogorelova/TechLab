import { useAppSelector } from "../../../store/store"

import { Container, Wrapper, LinkSection, SectionTitle } from "./StyledLinkesWrap"

type LinksWrap = {
    isClicked?: boolean,
}

export const LinksWrap = ({ isClicked }: LinksWrap) => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const tab = useAppSelector((state) => state.nav.tabs.find((tab) => tab.title === clickedTab))

    return (<Wrapper $isClicked={isClicked}>
        <Container>
            {tab && tab.linkSections && tab.linkSections.map((link) =>
                <div key={link}><LinkSection>{link}</LinkSection><SectionTitle to={'/'}>Заглушка</SectionTitle></div>)}
        </Container>
    </Wrapper>)
}