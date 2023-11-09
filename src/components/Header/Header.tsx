import { StyledContainerHeader, StyledHeaderWrap, StyledLogoWrap, StyledName } from "./StyledHeader"

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import { Menu } from "./Menu/Menu"
import { IconsWrap } from './IconsWrap/IconsWrap'
import { LinksWrap } from './LinksWrap/LinksWrap'
import { SearchPanel } from './SearchPanel/SearchPanel'

export const Header = () => {
    return (<>
        <StyledHeaderWrap>
            <StyledContainerHeader>
                <StyledLogoWrap to={'/'}>
                    <Logo></Logo>
                    <StyledName>TechLab</StyledName>
                </StyledLogoWrap>
                <Menu></Menu>
                <IconsWrap></IconsWrap>
            </StyledContainerHeader>
        </StyledHeaderWrap>
        {/* <LinksWrap></LinksWrap> */}
        <SearchPanel></SearchPanel>
    </>)
}