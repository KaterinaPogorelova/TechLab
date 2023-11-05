import { useAppSelector } from "../../../store/store"
import { Container, Wrapper, LinkSection, SectionTitle } from "./StyledLinkesWrap"



export const LinksWrap = () => {
    const clickedTab = useAppSelector((state) => state.nav.clickedTab)
    const tab = useAppSelector((state) => state.nav.tabs.find((tab) => tab.title === clickedTab))

    return (<Wrapper style={tab?.linkSections ? { visibility: 'visible', transform: 'translateY(92px)', opacity: '1' } :
        { visibility: 'hidden', transform: 'translateY(0px)', opacity: '0' }}>
        <Container>
            {tab && tab.linkSections && tab.linkSections.map((link) => <div><LinkSection>{link}</LinkSection><SectionTitle to={'/'}>Заглушка</SectionTitle></div>)}
        </Container>
    </Wrapper>)
}