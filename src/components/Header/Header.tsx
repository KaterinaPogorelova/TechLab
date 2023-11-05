import { StyledContainer, StyledHeaderWrap, StyledLogoWrap, StyledName } from "./StyledHeader"

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { Menu } from "./Menu/Menu"
import { IconsWrap } from './IconsWrap/IconsWrap'
import { LinksWrap } from './LinksWrap/LinksWrap'
import { SearchPanel } from './SearchPanel/SearchPanel'

export const Header = () => {
    return (<>
        <StyledHeaderWrap>
            <StyledContainer>
                <StyledLogoWrap to={'/'}>
                    <Logo></Logo>
                    <StyledName>TechLab</StyledName>
                </StyledLogoWrap>
                <Menu></Menu>
                <IconsWrap></IconsWrap>
            </StyledContainer>
        </StyledHeaderWrap>
        <LinksWrap></LinksWrap>
        <SearchPanel></SearchPanel>
    </>)
}