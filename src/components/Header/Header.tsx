import { useAppSelector } from "../../store/store"

import { StyledContainerHeader, StyledHeaderWrap, StyledLogoWrap, StyledName } from "./StyledHeader"

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'

import { Menu } from "./Menu/Menu"
import { IconsWrap } from './IconsWrap/IconsWrap'
import { SearchPanel } from './SearchPanel/SearchPanel'

export const Header = () => {
    const isRunlineClosed = useAppSelector((state) => state.runline.isClosed)

    return (<>
        <StyledHeaderWrap $isRunlineClosed={isRunlineClosed}>
            <StyledContainerHeader>
                <StyledLogoWrap to={'/'}>
                    <Logo />
                    <StyledName>TechLab</StyledName>
                </StyledLogoWrap>
                <Menu />
                <IconsWrap />
            </StyledContainerHeader>
            <SearchPanel></SearchPanel>
            <SearchPanel />
        </StyledHeaderWrap>
    </>)
}