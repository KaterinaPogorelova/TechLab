import { useWindowSize } from "../../hooks/useWindowSize"

import { useAppSelector } from "../../store/store"

import { StyledContainerHeader, StyledHeadIconsWrap, StyledHeaderWrap, StyledLogoWrap, StyledName } from "./StyledHeader"

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import { Menu } from "./Menu/Menu"
import { IconsWrap } from './IconsWrap/IconsWrap'
import { SearchPanel } from './SearchPanel/SearchPanel'
import { Burger } from "../../assets/icons/HeaderIcons"
import { MenuTablet } from "./Menu/MenuTablet"
import { MenuMobile } from "./Menu/MenuMobile"

export const Header = () => {
    const { width = 0 } = useWindowSize()
    const isRunlineClosed = useAppSelector((state) => state.runline.isClosed)

    return (<>
        <StyledHeaderWrap $isRunlineClosed={isRunlineClosed}>
            <StyledContainerHeader>
                <StyledHeadIconsWrap>
                    <Burger />
                    <StyledLogoWrap to={'/'}>
                        <Logo />
                        <StyledName>TechLab</StyledName>
                    </StyledLogoWrap>
                </StyledHeadIconsWrap>
                {width > 1023 && <Menu />}
                {/* {width < 1024 && width > 767 && <MenuTablet></MenuTablet>} */}
                {width < 1024 && <MenuMobile></MenuMobile>}
                <IconsWrap />
            </StyledContainerHeader>
            <SearchPanel />
        </StyledHeaderWrap>
    </>)
}