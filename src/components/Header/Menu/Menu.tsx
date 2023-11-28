import { useAppSelector } from "../../../store/store"

import { StyledNav, StyledTestBtn } from "./StyledMenu"
import { NavLink } from "./NavLink"


export const Menu = () => {
    const tabs = useAppSelector((state) => state.nav.tabs)

    return (<StyledNav>
        {tabs.map((tab) => tab.path ? <NavLink path={tab.path} hasLinks={tab.linkSections ? true : false} title={tab.title} key={tab.title} /> : <NavLink hasLinks={tab.linkSections ? true : false} title={tab.title} key={tab.title} />)}
        <StyledTestBtn to={'/'}>Career Test</StyledTestBtn>
    </StyledNav>)
}