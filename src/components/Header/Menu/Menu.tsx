import { useAppSelector } from "../../../store/store"
import { Nav } from "./StyledMenu"
import { NavLink } from "./NavLink"


export const Menu = () => {
    const tabs = useAppSelector((state) => state.nav.tabs)

    return (<Nav>
        {tabs.map((tab) => tab.path ? <NavLink path={tab.path} title={tab.title} /> : <NavLink title={tab.title} />)}
    </Nav>)
}