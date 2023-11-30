import { useAppSelector } from "../../store/store"

import { StyledBurgerWrap, StyledContainerHeader, StyledHeadIconsWrap, StyledHeaderWrap, StyledLogoWrap, StyledName } from "./StyledHeader"

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import { Menu } from "./Menu/Menu"
import { IconsWrap } from './IconsWrap/IconsWrap'
import { SearchPanel } from './SearchPanel/SearchPanel'
import { Burger } from "../../assets/icons/HeaderIcons"

export const Header = () => {
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
                <Menu />
                <IconsWrap />
            </StyledContainerHeader>
            <SearchPanel />
        </StyledHeaderWrap>
    </>)
}