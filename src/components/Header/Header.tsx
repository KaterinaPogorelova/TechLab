import { Container, HeaderWrap, LogoWrap, Name } from "./StyledHeader"

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { Menu } from "./Menu/Menu"
import { IconsWrap } from './IconsWrap/IconsWrap'
import { LinksWrap } from './LinksWrap/LinksWrap'
import { SearchPanel } from './SearchPanel/SearchPanel'

export const Header = () => {
    return (<>
        <HeaderWrap>
            <Container>
                <LogoWrap to={'/'}>
                    <Logo></Logo>
                    <Name>TechLab</Name>
                </LogoWrap>
                <Menu></Menu>
                <IconsWrap></IconsWrap>
            </Container>
        </HeaderWrap>
        <LinksWrap></LinksWrap>
        <SearchPanel></SearchPanel>
    </>)
}